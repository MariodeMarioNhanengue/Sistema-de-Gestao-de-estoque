// Inicialização dos gráficos do Dashboard.
// Os arrays abaixo (labels/valores) são dados de exemplo — troca-os por
// dados vindos do backend (ex.: via um <script th:inline="javascript"> que
// exponha as variáveis do Model, ou por uma chamada fetch() a
// /api/dashboard/resumo, conforme o Capítulo VIII da especificação).

document.addEventListener('DOMContentLoaded', function () {
    initSidebarToggle();
    initResumoVendasChart();
    initVendasCategoriaChart();
});

function initSidebarToggle() {
    var toggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
    });
}

function initResumoVendasChart() {
    var canvas = document.getElementById('chartResumoVendas');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: ['10 Jun', '11 Jun', '12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun'],
            datasets: [{
                label: 'Vendas (MT)',
                data: [3200, 5400, 4100, 3800, 4600, 7900, 6200],
                borderColor: '#2f5fed',
                backgroundColor: 'rgba(47, 95, 237, 0.12)',
                borderWidth: 2,
                fill: true,
                tension: 0.35,
                pointRadius: 0,
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false } },
                y: {
                    grid: { color: '#eef1f7' },
                    ticks: {
                        callback: function (value) { return (value / 1000) + 'K'; }
                    }
                }
            }
        }
    });
}

function initVendasCategoriaChart() {
    var canvas = document.getElementById('chartVendasCategoria');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ['Bebidas', 'Alimentação', 'Higiene', 'Limpeza', 'Outros'],
            datasets: [{
                data: [35, 28, 18, 12, 7],
                backgroundColor: ['#4574f5', '#7c5cf0', '#1fa564', '#f2a93c', '#c7cede'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: { legend: { display: false } }
        }
    });
}
