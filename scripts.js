document.addEventListener('DOMContentLoaded', function() {
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');
    const savingsInput = document.getElementById('savings');
    const remainingBudgetDisplay = document.getElementById('remaining-budget');
    const expenseChartCanvas = document.getElementById('expense-chart');

    // Calculate remaining budget
    function calculateRemainingBudget() {
        const income = parseFloat(incomeInput.value) || 0;
        const expenses = parseFloat(expensesInput.value) || 0;
        const savingsGoal = parseFloat(savingsInput.value) || 0;

        const remainingBudget = income - expenses;
        remainingBudgetDisplay.textContent = `$${remainingBudget.toFixed(2)}`;

        // Update expense chart
        updateExpenseChart(income, expenses, savingsGoal);
    }

    // Update expense chart
    function updateExpenseChart(income, expenses, savingsGoal) {
        const ctx = expenseChartCanvas.getContext('2d');
        const expenseChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Income', 'Expenses', 'Remaining Budget'],
                datasets: [{
                    data: [income, expenses, income - expenses],
                    backgroundColor: ['#4caf50', '#f44336', '#2196f3']
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontSize: 14,
                        fontColor: '#333'
                    }
                },
                responsive: true
            }
        });
    }

    // Event listeners for input changes
    incomeInput.addEventListener('input', calculateRemainingBudget);
    expensesInput.addEventListener('input', calculateRemainingBudget);
    savingsInput.addEventListener('input', calculateRemainingBudget);

    // Initial calculation
    calculateRemainingBudget();
});
