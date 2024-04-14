const annual = document.getElementById('annual');
const monthly = document.getElementById('monthly');
const cardsAnnual = document.getElementById('plan_annual');
const cardsMonthly = document.getElementById('plan_monthly');

annual.addEventListener('click', function () {
    annual.classList.add('btn-active');
    monthly.classList.remove('btn-active');

    if (cardsAnnual.classList.contains('close-card')){
        cardsMonthly.classList.add('close-card')
        cardsAnnual.classList.remove('close-card')
    }
});

monthly.addEventListener('click', function () {
    monthly.classList.add('btn-active');
    annual.classList.remove('btn-active');

    if (cardsMonthly.classList.contains('close-card')){
        cardsMonthly.classList.remove('close-card')
        cardsAnnual.classList.add('close-card')
     }

});