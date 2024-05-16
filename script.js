document.addEventListener("DOMContentLoaded", function () {
    const apartments = [
      { number: 101, details: "Apartment 101 - John Doe", issue: false },
      { number: 102, details: "Apartment 102 - Jane Smith", issue: true },
      { number: 103, details: "Apartment 103 - Vacant", issue: false },
      { number: 104, details: "Apartment 104 - Maintenance Required", issue: true },
      { number: 105, details: "Apartment 105 - Vacant", issue: false }
      // Add more apartments as needed
    ];

    const issueGrid = document.getElementById("issue-grid");

    apartments.forEach(apartment => {
      if (apartment.issue) {
        const apartmentBox = document.createElement("div");
        apartmentBox.classList.add("apartment-box", "issue");
        apartmentBox.textContent = apartment.number;
        apartmentBox.setAttribute("data-details", apartment.details);
        issueGrid.appendChild(apartmentBox);
      }
    });
  });