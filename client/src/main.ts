import "./style.css";

interface Suspect {
  id: number;
  name: string;
  alibi: string;
}

interface CaseData {
  id: string;
  title: string;
  victim: string;
  suspects: Suspect[];
}

async function loadCase() {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) {
    console.error("App element not found");
    return;
  }

  app.innerHTML = "<h2>Loading case...</h2>";

  try {
    const response = await fetch(
      "http://localhost:5000/api/cases/new"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch case");
    }

    const caseData: CaseData = await response.json();

    app.innerHTML = `
      <div class="container">
        <h1>WHODUNIT AI</h1>

        <div class="case-header">
          <p class="case-label">MYSTERY CASE</p>
          <h2>${caseData.title}</h2>
          <p class="victim">
            Victim: ${caseData.victim}
          </p>
        </div>

        <h2 class="suspects-heading">Suspects</h2>

        <div class="suspects">
          ${caseData.suspects
            .map(
              (suspect) => `
                <div class="suspect-card">
                  <div class="suspect-number">
                    SUSPECT ${suspect.id}
                  </div>

                  <h3>${suspect.name}</h3>

                  <p class="alibi-label">ALIBI</p>

                  <p class="alibi">
                    ${suspect.alibi}
                  </p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  } catch (error) {
    console.error(error);

    app.innerHTML = `
      <div class="error">
        <h2>Unable to load case</h2>
        <p>Please make sure your backend is running on port 5000.</p>
      </div>
    `;
  }
}

loadCase();