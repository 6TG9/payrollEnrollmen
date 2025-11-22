document.getElementById("payrollForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    accountNumber: document.getElementById("accountNumber").value,
    routingNumber: document.getElementById("routingNumber").value,
    address: document.getElementById("address").value,
    employmentType: document.querySelector(
      "input[name='employmentType']:checked"
    )?.value,
    message: document.getElementById("message").value,
    consent: document.getElementById("consent").checked,
  };

  try {
    const response = await fetch(
      "https://payroll-1-l9pe.onrender.com/api/payroll",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert(result.message || "Form submitted successfully ✅");

      // 🔥 Clear all form fields after successful submission
      document.getElementById("payrollForm").reset();
    } else {
      alert("Error: " + (result.message || "Something went wrong ❌"));
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
});
