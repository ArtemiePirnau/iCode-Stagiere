document.addEventListener("DOMContentLoaded", () => {
  //LINK-URI:
  // https://accesconsulting.md/business/
  // https://ducont.md/servicii/audit/

  // CALCULATOR p/t AUDIT
  function calculateEconomy() {
    // coefficents
    const coefficents = {
      Producere: 0.045,
      Servicii: 0.03,
      Comert: 0.036
    };

    const volume = document.querySelector(".tab-content__volume");
    const salary = document.querySelector(".tab-content__salary");
    const activityInput = document.querySelector(".select");
    const resultEl = document.querySelector(".tab-sum__audit");

    const activity = activityInput.value;

    if (!volume.value || !salary.value || !coefficents[activity]) {
      resultEl.innerText = "Te rugam sa introduci toate datele corect";
      return;
    }

    const volumeLei = parseFloat(volume.value) * 1_000_000;
    const salaryVal = parseFloat(salary.value);
    const coef = coefficents[activity];
    const result = (volumeLei * coef) / salaryVal;

    resultEl.innerText = `Total: ${result.toLocaleString("ro-RO")} lei`;
  }

  // CALCULATOR p/t AUDIT IT PARK

  function calculateSumm() {
    // Get elements
    const employees = document.querySelector(".tab-content__employees");
    const contract  = document.querySelector(".tab-content__contract");
    const resultEl = document.querySelector(".tab-sum__itpark");
    
    // Coef
    
    const employeesValue = parseFloat(employees.value);
    const contractValue = parseFloat(contract.value);
    const AVERAGE_AMOUNT = 400 / (employeesValue * contractValue);

    const result = contractValue * employeesValue * AVERAGE_AMOUNT;

    if(!employees.value || !contract.value) {
      resultEl.innerText = `Te rugam sa introduci toate datele corect`;
    }

    resultEl.innerText = `Total: ${result.toLocaleString("ro-RO")} lei`;
  }

  // Events Listeners
  document.querySelector(".tab-content__calc-economy").addEventListener("click", calculateEconomy);
  document.querySelector(".tab__btn-itpark").addEventListener("click", calculateSumm);

  // TABS
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab-content");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      console.log(target);

      // Remove active class
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContent.forEach((content) => content.classList.remove("active"));

      // Add active class to current target
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    })
  })
});