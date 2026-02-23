
    const jobs = [
      {
        id: 1,
        companyName: "Google",
        position: "Mern Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$110k",
        description: "Build A fully ecommerce website",
        status: "all",
      },
      {
        id: 2,
        companyName: "Meta",
        position: "React Developer",
        location: "USA",
        type: "Part-time",
        salary: "$140k",
        description: "Develop social media features",
        status: "all",
      },
      {
        id: 3,
        companyName: "Amazon",
        position: "UI Developer",
        location: "Canada",
        type: "Contract",
        salary: "$90k",
        description: "Improve customer experience",
        status: "all",
      },
      {
        id: 4,
        companyName: "Netflix",
        position: "AI Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$130k",
        description: "Implement AI-driven UI features",
        status: "all",
      },
      {
        id: 5,
        companyName: "Spotify",
        position: "Frontend Engineer",
        location: "Europe",
        type: "Remote",
        salary: "$110k",
        description: "Music platform features",
        status: "all",
      },
      {
        id: 6,
        companyName: "Airbnb",
        position: "UI Engineer",
        location: "USA",
        type: "Full-time",
        salary: "$125k",
        description: "Travel experiences UI",
        status: "all",
      },
      {
        id: 7,
        companyName: "Uber",
        position: "Web Developer",
        location: "Remote",
        type: "Contract",
        salary: "$95k",
        description: "Transport system dashboards",
        status: "all",
      },
      {
        id: 8,
        companyName: "Microsoft",
        position: "Frontend Specialist",
        location: "Hybrid",
        type: "Full-time",
        salary: "$135k",
        description: "Enterprise UI solutions",
        status: "all",
      },
    ];

    let currentTab = "all";

    const jobContainer = document.getElementById("jobContainer");
    const emptyState = document.getElementById("emptyState");

    const totalCount = document.getElementById("totalCount");
    const interviewCount = document.getElementById("interviewCount");
    const rejectedCount = document.getElementById("rejectedCount");
    const tabCount = document.getElementById("tabCount");

    function updateCounts() {
      totalCount.textContent = jobs.length;
      interviewCount.textContent = jobs.filter(j => j.status === "interview").length;
      rejectedCount.textContent = jobs.filter(j => j.status === "rejected").length;
    }

    function renderJobs() {
      jobContainer.innerHTML = "";

      const filteredJobs =
        currentTab === "all"
          ? jobs
          : jobs.filter(job => job.status === currentTab);

      tabCount.textContent = `${filteredJobs.length} Jobs`;

      if (filteredJobs.length === 0) {
        emptyState.classList.remove("hidden");
        return;
      }

      emptyState.classList.add("hidden");

      filteredJobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow";

        card.innerHTML = `
          <h3 class="font-bold text-lg">${job.position}</h3>
          <p class="text-gray-600">${job.companyName} • ${job.location}</p>
          <p class="text-sm mt-1">${job.type} • ${job.salary}</p>
          <p class="mt-2 text-gray-700">${job.description}</p>

          <div class="flex gap-2 mt-4">
            <button class="interview-btn px-3 py-1 rounded text-sm ${
              job.status === "interview"
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }">Interview</button>

            <button class="rejected-btn px-3 py-1 rounded text-sm ${
              job.status === "rejected"
                ? "bg-red-600 text-white"
                : "bg-gray-200"
            }">Rejected</button>

            <button class="delete-btn ml-auto text-sm text-red-500"><i class="fa-solid fa-trash"></i></button>
          </div>
        `;

        card.querySelector(".interview-btn").onclick = () => {
          job.status = job.status === "interview" ? "all" : "interview";
          updateCounts();
          renderJobs();
        };

        card.querySelector(".rejected-btn").onclick = () => {
          job.status = job.status === "rejected" ? "all" : "rejected";
          updateCounts();
          renderJobs();
        };

        card.querySelector(".delete-btn").onclick = () => {
          const index = jobs.findIndex(j => j.id === job.id);
          jobs.splice(index, 1);
          updateCounts();
          renderJobs();
        };

        jobContainer.appendChild(card);
      });
    }

    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentTab = btn.dataset.tab;

        document.querySelectorAll(".tab-btn").forEach(b => {
          b.classList.remove("border-b-2", "border-black");
          b.classList.add("text-gray-500");
        });

        btn.classList.add("border-b-2", "border-black");
        btn.classList.remove("text-gray-500");

        renderJobs();
      });
    });

    updateCounts();
    renderJobs();
  