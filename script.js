document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('graficoVendas').getContext('2d');

    
    const dados = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas (Milhares)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

   
    const config = {
        type: 'bar', 
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    
    new Chart(ctx, config);
});