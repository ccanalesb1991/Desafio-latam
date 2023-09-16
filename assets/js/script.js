// FUNCTIONS

// Request
const indicatorRequest = async (indicator) => {
    try {
        const response = await fetch(`https://mindicador.cl/api/${indicator}`);
        if (!response.ok) throw new Error("Ocurrió un error");
        const data = await response.json();
        return data.serie;
    } catch (error) {
        const converterText = document.getElementById("converter-text");
        converterText.innerText = error;
        converterText.style.color = "red";
    }
};

//Preparación de la data a graficar
const createDataToChart = (dataArray) => {
    const dataArrayLast10 = dataArray.slice(0, 10);
    const labels = dataArrayLast10
        .map((dato) => getNewDateFormat(dato.fecha))
        .reverse();
    const data = dataArrayLast10.map((dato) => dato.valor).reverse();

    const datasets = [
        {
            label: "CLP",
            borderColor: "orange",
            data,
        },
    ];

    return { labels, datasets };
};

// Renderizado de la gráfica
const renderChart = (dataArray) => {
    // Verificamos si existe gráfico previo y lo destrimos
    if (Chart.getChart("indicator-chart"))
        Chart.getChart("indicator-chart").destroy();

    const data = createDataToChart(dataArray);
    const config = {
        type: "line",
        data,
    };

    new Chart("indicator-chart", config);
};

// Obtiene formado de fecha DD/MM
const getNewDateFormat = (date) => {
    const dateFormat = new Date(date);
    const day = dateFormat.getUTCDate();
    const month = dateFormat.getUTCMonth() + 1; // Sumamos 1 para obtener el mes correcto
    return (
        day.toString().padStart(2, "0") +
        "/" +
        month.toString().padStart(2, "0")
    );
};

// Obtiene el formato de moneda
const getCurrencyFormat = (amount) =>
    amount.toLocaleString("es-CL", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

// De obtiene el formato de la fecha actual en letras.
const setDate = () => {
    let meses = new Array(
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    );
    let diasSemana = new Array(
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    );
    let f = new Date();

    return (
        diasSemana[f.getDay()] +
        ", " +
        f.getDate() +
        " de " +
        meses[f.getMonth()] +
        " de " +
        f.getFullYear()
    );
};

// EVENTS
const converterBtn = document.getElementById("converter-btn");

converterBtn.addEventListener("click", async () => {
    const converterInput = document.getElementById("converter-input");
    const converterSelect = document.getElementById("converter-select");
    const converterText = document.getElementById("converter-text");
    const chartContainer = document.getElementById("chart-container");

    let dataArray = await indicatorRequest(converterSelect.value);

    const inputValue = parseFloat(converterInput.value);
    const actualValue = parseFloat(dataArray[0].valor);

    if (!isNaN(inputValue)) {
        const input = getCurrencyFormat(inputValue);
        const tasa = getCurrencyFormat(actualValue);
        const total = getCurrencyFormat(inputValue / actualValue);
        const currencyCodes = {
            dolar: "USD",
            uf: "UF",
            euro: "EUR",
        };

        converterText.style.color = "black";
        converterText.innerHTML = `
            <p class="converter-text-clp"> <span>${input}</span> CLP es igual a:</p>
            <h3 class="converter-text-total">
                ${total} ${currencyCodes[converterSelect.value]}
            </h3>
            <p class="converter-text-tasa">Tasa: <span>${tasa}</span> CLP - ${setDate()}</p>
            `;
        chartContainer.innerHTML = `
            <canvas id="indicator-chart"></canvas>
            <p class="chart-title"></p>
        `;
        renderChart(dataArray);
    } else {
        converterText.innerHTML = "<p>Ingrese un valor válido</p>";
        converterText.style.color = "red";
    }
});
