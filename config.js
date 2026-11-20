// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Justin Tang",
    program: "BTech Automation Engineering Technology / Faculty of Engineering",
    university: "McMaster University, Canada",
    email: "tangt34@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Development of Digital Twin of a Railway Corridor Using Unity Game Engine and SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Netedit -> Sumo Simulation -> raw video -> edited video"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Digital roadway-and-traffic modeling at the study intersection",
			"Evaluating the current HDV situation",
			"Testing the CAV traffic hypothesis",
			"Candidate major-road signal-timing intervention",
    ],

    problemTitle: "Analysis of Simulated Existing Traffic Conditions, a 100% CAV Future, and a Candidate Intervention at the Eglinton–Scarlett Intersection",
    problemBullets: [
			"Problem 1: Establishing a characterized baseline",
			"Problem 2: Comparing HDV and CAV behavior",
			"Problem 3: Evaluating HDV and CAV Speed-Density Diagrams",
			"Problem 4: Verifying a candidate intervention",
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Develop a digital road network and traffic model for the existing Eglinton–Scarlett intersection",
			"Characterize the 100% HDV baseline and the 100% CAV scenario",
			"Compare and explain the selected edge’s speed–density relationship",
			"Select, justify, implement, and evaluate the major-road signal timing "
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Roadway-network development and HDV traffic baseline",
				text: "The SUMO roadway network was developed for the Eglinton Avenue West–Scarlett Road intersection, with edge E96 selected for speed–density analysis.",
		  		text: "The HDV baseline uses a 29-second signal cycle and simulated traffic demand to evaluate existing traffic conditions.",
		  		text: "Scenario 1 introduces 100% CAVs using the CACC model to compare traffic performance against the HDV baseline using the Greenshields speed–density model.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Controlled 100% CAV simulation",
				text: "Scenario 1 uses SUMO’s CACC model to compare CAV and HDV speed–density relationships under similar traffic conditions.",
		  		text: "The simulation assumes 100% CAV penetration with a total traffic demand of 2,400 vehicles per hour.",
		  		text: "The Greenshields model is applied to evaluate traffic performance on road segment E96.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Justification and implementation of the major-road signal-timing intervention",
				text: "Scenario 2 evaluates the effect of reallocating two seconds of signal green time while maintaining a 29-second cycle to assess potential traffic improvements under HDV conditions.",
		  		text: "Phase 0 increases from 17 to 19 seconds, while phase 2 decreases from 6 to 4 seconds.",
		  		text: "The intervention aims to improve traffic speed and reduce congestion on the selected road segment, E96, assuming phase 0 serves this approach.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Summarize results using figures, KPIs, and the showcase website.",
		  		text: "Compare the traffic performance of HDV, CAV, and signal-timing intervention scenarios using speed–density graphs.",
		  		text: "Present key findings and simulation outcomes through an accessible showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Train Scheduling & Signaling (SUMO)",
        bullets: [
				  { text: "Build a simulated rail network in SUMO with train routing and maximum operating speed." },
          { text: "Design fixed-block rail signals and define station stops along the corridor." },
          { text: "Configure timetable, scheduled departures, running time, dwell time, and headway." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Digital Twin Assets Developement (Blender)",
        bullets: [
          { text: "Generative AI: use Meshy.ai tool to develop different assets." },
          { text: "From generative AI to belnder." },
          { text: "Preprocessing assets in Blender ." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Immersive VR Visualization (Unity)",
        bullets: [
				  { text: "Develop a 3D railway environment including stations, buildings, trees, and rolling stock." },
          { text: "Configure visualization fundamentals: lighting, camera position, time of day, and scene composition." },
          { text: "Produce a VR 360-degree video output for immersive presentation and portfolio use." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Dashboard or plot set: KPI cards, bar charts, and/or time series." },
          { text: "Scenario story: what changed, what improved, and what tradeoffs appeared." },
          { text: "Limitations + next steps: what data would strengthen confidence." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Train schedule simulation outputs across two scenarios showing arrivals, departures, and dwell time across four stations. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Scenario 1 provides a stable baseline timetable with consistent station dwell and smooth train progression.",
				"Scenario 2 applies a delay at S2, which then propagates to downstream stations.",
				"Delay effects grow across frequency levels, with major increases in arrival and departure times at S3 and S4.",
				"S1 is only slightly affected, while downstream stations absorb most of the disruption.",
				"This demonstrates the importance of recovery time, dwell management, and operational control in rail scheduling."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
