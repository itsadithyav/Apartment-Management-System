document.addEventListener("DOMContentLoaded", function () {
  const apartments = [
    { number: 101, details: "Apartment 101 - John Doe", issue: false },
    { number: 102, details: "Apartment 102 - Jane Smith", issue: true },
    { number: 103, details: "Apartment 103 - Vacant", issue: false },
    {
      number: 104,
      details: "Apartment 104 - Maintenance Required",
      issue: true,
    },
    { number: 105, details: "Apartment 105 - Vacant", issue: false },
    // Add more apartments as needed
  ];

  const issueGrid = document.getElementById("issue-grid");

  apartments.forEach((apartment) => {
    if (apartment.issue) {
      const apartmentBox = document.createElement("div");
      apartmentBox.classList.add("apartment-box", "issue");
      apartmentBox.textContent = apartment.number;
      apartmentBox.setAttribute("data-details", apartment.details);
      issueGrid.appendChild(apartmentBox);
    }
  });
});

document
  .getElementById("add-tenant-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const tenantName = document.getElementById("tenant-name").value;
    const tenantApartment = document.getElementById("tenant-apartment").value;

    // Create a new apartment box
    const newApartmentBox = document.createElement("div");
    newApartmentBox.className = "col-sm-6 col-md-4 col-lg-3 mb-4";
    newApartmentBox.innerHTML = `
      <div class="apartment-box p-3" data-details="Apartment ${tenantApartment} - ${tenantName}">
        ${tenantApartment}
      </div>
    `;

    // Append the new apartment box to the grid
    document.getElementById("apartment-grid").appendChild(newApartmentBox);

    // Clear the form fields
    document.getElementById("tenant-name").value = "";
    document.getElementById("tenant-apartment").value = "";

    // Optional: Scroll to the newly added tenant
    newApartmentBox.scrollIntoView({ behavior: "smooth" });
  });
