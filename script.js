const storyData = [
  {
    id: "instagram",
    title: "Not What Instagram Shows",
    image: "./assets/story-welcome.png",
    teaser: "The reality behind the perfect posts and the friendships that actually matter.",
    detail:
      "When Mia joined, she thought sisterhood would look like matching outfits, perfect pictures, and always knowing what to say. The truth was quieter. It was someone saving her a seat after a long recruitment day. It was a sister texting, 'Are you really okay?' after noticing she got quiet. The friendships that lasted were not the ones that looked best online. They were the ones that made room for awkwardness, homesickness, and real life."
  },
  {
    id: "big-little",
    title: "Big/Little Beyond the Gifts",
    image: "./assets/story-checkin.jpg",
    teaser: "I was terrified I wouldn't connect with my big. This is what actually happened.",
    detail:
      "Jordan worried that big/little would feel forced, especially because everyone else seemed to know exactly who they wanted. Her big did not win her over with the biggest basket. She won her over by asking what kind of support felt helpful, remembering her exam schedule, and showing up after chapter when Jordan looked overwhelmed. Their relationship became less about reveal week and more about having someone who made the chapter feel easier to enter."
  },
  {
    id: "belonging",
    title: "Belonging Without Changing",
    image: "./assets/story-service.png",
    teaser: "How I learned to bring my whole self to chapter meetings and events.",
    detail:
      "Leila spent her first semester editing herself. She laughed softer, dressed safer, and tried to become the kind of member she thought the chapter expected. During a service event, a sister asked why she always apologized before sharing ideas. That question stayed with her. Slowly, Leila started bringing more of herself into the room: her humor, her culture, her opinions, her boundaries. Belonging finally felt real when she stopped shrinking to earn it."
  },
  {
    id: "voice",
    title: "Finding My Voice",
    image: "./assets/story-checkin.png",
    teaser: "I joined thinking I had to change who I was. Turns out, being myself was exactly what sisterhood needed.",
    detail:
      "Avery was the quiet one in every room. She assumed leadership belonged to louder sisters, so she volunteered behind the scenes and kept her ideas private. At a sisterhood planning meeting, someone asked what would make newer members feel less nervous. Avery finally spoke up. Her idea became a welcome-night tradition, and it taught her that voice is not about being the loudest. Sometimes leadership is noticing what others miss."
  },
  {
    id: "recruitment",
    title: "The Recruitment Truth",
    image: "./assets/story-welcome.png",
    teaser: "What they don't tell you about recruitment week: it's okay to feel overwhelmed and uncertain.",
    detail:
      "Sofia expected recruitment to be exciting from beginning to end, but by the third day she was exhausted. She worried everyone else had instant clarity while she had questions. A sister pulled her aside and admitted she had cried during recruitment too. That honesty changed everything. Sofia realized uncertainty did not mean she was in the wrong place. It meant she was choosing something important with her whole heart involved."
  },
  {
    id: "almost-quit",
    title: "When I Almost Quit",
    image: "./assets/story-service.png",
    teaser: "My first semester was rough. Here's how I found my people within the chapter.",
    detail:
      "Camila nearly resigned after a semester of feeling like everyone already had their circle. Then a sister invited her to help set up a philanthropy table before anyone else arrived. They talked while folding shirts and arranging supplies, and that small invitation became the first thread of belonging. Camila did not need the whole chapter to know her overnight. She needed one doorway in, then another."
  }
];

const promptData = [
  {
    id: "recruitment-home",
    theme: "Recruitment",
    prompt: "When did I first feel like this chapter could become home?",
    responses: [
      { name: "Mia", text: "During open house, someone remembered that I was nervous about being far from home and checked on me the next day." },
      { name: "Anonymous", text: "It was not one huge moment. It was three different sisters making space for me in normal conversations." }
    ]
  },
  {
    id: "big-little-care",
    theme: "Big & Little",
    prompt: "What is one thing I hope my big or little always knows about the way I care?",
    responses: [
      { name: "Jordan", text: "I care through small details. I may not always be loud about it, but I notice what matters." }
    ]
  },
  {
    id: "belonging-room",
    theme: "Belonging",
    prompt: "Where do I feel fully included, and where could our chapter make more room?",
    responses: [
      { name: "Anonymous", text: "I feel included at smaller sisterhood events. Big events are harder when everyone breaks into old groups." }
    ]
  },
  {
    id: "leadership-seen",
    theme: "Leadership",
    prompt: "How can I lead in a way that makes quieter sisters feel seen?",
    responses: [
      { name: "Avery", text: "Ask people before the meeting if they want help sharing an idea. Not everyone thinks best on the spot." }
    ]
  },
  {
    id: "friendship-busy",
    theme: "Friendship",
    prompt: "What does being a good sister look like when life gets busy?",
    responses: [
      { name: "Nia", text: "A quick check-in still counts. I want us to stop thinking care has to be a huge gesture." }
    ]
  },
  {
    id: "ritual-values",
    theme: "Ritual",
    prompt: "What value do I want to carry beyond the meeting room and into my everyday choices?",
    responses: [
      { name: "Anonymous", text: "Loyalty, but the healthy kind. Showing up honestly, not pretending everything is fine." }
    ]
  }
];

const pages = {
  home: `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-content">
        <p class="eyebrow">A softer place to be honest</p>
        <h1 id="home-title">Real Sisterhood</h1>
        <p>
          A welcoming sorority space for the girls who want belonging to feel
          real: honest conversations, thoughtful prompts, shared memories, and
          a softer place to find your people.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#prompts">Find your prompt</a>
          <a class="button secondary" href="#stories">Read sister stories</a>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="section-header">
        <div>
          <p class="section-kicker">What lives here</p>
          <h2>Belonging beyond bid day.</h2>
        </div>
        <p>
          Real Sisterhood gathers the little rituals that turn a chapter into
          a home: reflection, encouragement, shared standards, and stories that
          make someone feel less alone.
        </p>
      </div>
      <div class="grid three">
        ${featureCard("01", "Sisterhood prompts", "Questions for chapter meetings, new member nights, big-little dates, and late-night talks.")}
        ${featureCard("02", "Belonging stories", "Short reflections about recruitment nerves, finding your people, leadership, service, and showing up.")}
        ${featureCard("03", "Chapter resources", "Ideas for welcoming rituals, care check-ins, friendship repair, and inclusive sisterhood events.")}
      </div>
    </section>

    <section class="section">
      <div class="quote-band">
        <blockquote>"Sisterhood gets real when everyone has room to belong."</blockquote>
        <p>
          The heart of Real Sisterhood is making the chapter feel like more than
          matching shirts and group photos. It is learning names, noticing who is
          quiet, inviting someone in, and choosing care on ordinary days.
        </p>
      </div>
    </section>

    <section class="section hero-gallery">
      <div class="gallery-grid">
        <img src="./assets/story-welcome.png" alt="Sisters in circle conversation" class="gallery-image" />
        <img src="./assets/story-checkin.png" alt="Sisters gathering together" class="gallery-image" />
        <img src="./assets/story-service.png" alt="Sisters having an intimate conversation" class="gallery-image" />
        <img src="./assets/sisterhood-hero.png" alt="Sisters laughing and bonding outdoors" class="gallery-image" />
      </div>
    </section>

    <section class="section alt">
      <div class="section-header">
        <div>
          <p class="section-kicker">Featured paths</p>
          <h2>Choose your sisterhood moment.</h2>
        </div>
        <p>
          Read something familiar, answer a prompt before chapter, or share a
          story that reminds another sister she is wanted here.
        </p>
      </div>
      <div class="grid three">
        ${linkCard("Prompts", "Conversation starters for real connection.", "#prompts")}
        ${linkCard("Stories", "Notes on friendship, leadership, and belonging.", "#stories")}
        ${linkCard("Share Yours", "Offer the story another sister may need.", "#share")}
      </div>
    </section>
  `,
  prompts: pageLayout(
    "Prompts",
    "Questions for real sorority belonging.",
    "Use these during sisterhood events, new member meetings, big-little dates, retreats, or any moment when the chapter needs more honesty than small talk.",
    `
      <section class="section">
        <div class="grid three">
          ${promptData.map((prompt) => promptCard(prompt)).join("")}
        </div>
      </section>
    `
  ),
  stories: pageLayout(
    "Stories",
    "Stories that make a chapter feel close.",
    "A growing library of sisterhood moments: recruitment nerves, finding your people, big-little bonds, service days, leadership lessons, and the small kindnesses that stay.",
    `
      <section class="section">
        <div class="grid three">
          ${storyData.map((story) => storyCard(story)).join("")}
        </div>
      </section>
    `
  ),
  resources: pageLayout(
    "Resources",
    "Support for a stronger chapter.",
    "A practical shelf for belonging-focused sisterhood events, thoughtful check-ins, inclusive traditions, and friendships that last beyond the semester.",
    `
      <section class="section">
        <div class="grid">
          <div class="resource-list">
            ${resourceItem("Panhellenic", "National Panhellenic Conference", "Official information and guidance from the umbrella organization for 26 women's-only inter/national sororities.", "https://npcwomen.org/", "Visit NPC")}
            ${resourceItem("Therapy", "Psychology Today Therapist Finder", "A searchable directory for finding therapists by location, issue, insurance, and appointment type.", "https://www.psychologytoday.com/us/therapists/", "Find a therapist")}
            ${resourceItem("Crisis", "988 Suicide & Crisis Lifeline", "Free, confidential support by call, text, or chat for mental health, substance use, or emotional distress in the United States.", "https://988lifeline.org/", "Get 988 support")}
            ${resourceItem("College Mental Health", "The Jed Foundation", "Mental health resources for teens, young adults, and colleges, including tools for stress, support, and campus wellbeing.", "https://jedfoundation.org/mental-health-resource-center/", "Explore JED resources")}
            ${resourceItem("Advocacy", "NAMI", "Education, support, and advocacy resources from the National Alliance on Mental Illness.", "https://www.nami.org/", "Visit NAMI")}
            ${resourceItem("Safety", "RAINN National Sexual Assault Hotline", "Confidential support for sexual assault survivors and people supporting them.", "https://rainn.org/help-and-healing/hotline/", "Contact RAINN")}
          </div>
        </div>
      </section>
    `
  ),
  share: pageLayout(
    "Share",
    "Share a sisterhood moment.",
    "Your story can be short, sweet, anonymous, or still unfolding. Share what made you feel welcomed, what you learned, or what you wish every new member knew.",
    `
      <section class="section">
        <div class="share-panel">
          <div class="share-note">
            <h2>What kind of story belongs here?</h2>
            <p>
              A bid day memory. A big-little lesson. A hard chapter conversation.
              A sister who checked in. A tradition that made you feel included.
              Real Sisterhood centers stories that make belonging feel specific.
            </p>
          </div>
          <form class="form" data-share-form>
            <div class="form-grid">
              <label>
                Name
                <input name="name" autocomplete="name" placeholder="Your name or anonymous" required />
              </label>
              <label>
                Story theme
                <select name="theme" required>
                  <option value="">Choose one</option>
                  <option>Recruitment</option>
                  <option>Big & Little</option>
                  <option>Sisterhood Event</option>
                  <option>Leadership</option>
                  <option>Service</option>
                </select>
              </label>
            </div>
            <label>
              Your story
              <textarea name="story" placeholder="Write what you want another sister to know..." required></textarea>
            </label>
            <button class="button ink" type="submit">Send story</button>
            <div class="form-message" role="status" data-form-message>
              Thank you. Your story has been held here for review.
            </div>
          </form>
        </div>
      </section>
    `
  ),
};

function pageLayout(title, heading, intro, content) {
  return `
    <section class="page-hero" aria-labelledby="${title.toLowerCase()}-title">
      <div class="page-hero-inner">
        <p class="section-kicker">${title}</p>
        <h1 id="${title.toLowerCase()}-title">${heading}</h1>
        <p>${intro}</p>
      </div>
    </section>
    ${content}
  `;
}

function featureCard(number, title, body) {
  return `
    <article class="card">
      <div class="icon-dot">${number}</div>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `;
}

function linkCard(title, body, href) {
  return `
    <article class="card">
      <h3>${title}</h3>
      <p>${body}</p>
      <div class="button-row">
        <a class="button ink" href="${href}">Open ${title.toLowerCase()}</a>
      </div>
    </article>
  `;
}

function promptCard(prompt) {
  return `
    <article class="card prompt-card">
      <span>${prompt.theme}</span>
      <h3>${prompt.prompt}</h3>
      <button class="button sage" type="button" data-open-prompt="${prompt.id}">Respond & read replies</button>
    </article>
  `;
}

function storyCard(story) {
  return `
    <article class="story-card">
      <img src="${story.image}" alt="" />
      <h3>${story.title}</h3>
      <p>${story.teaser}</p>
      <button class="button sage" type="button" data-open-story="${story.id}">Read More</button>
    </article>
  `;
}

function storyRow(theme, title) {
  return `
    <article class="story-row">
      <strong>${theme}</strong>
      <h3>${title}</h3>
    </article>
  `;
}

function resourceItem(type, title, body, href, linkText) {
  return `
    <article class="resource-item">
      <span class="resource-tag">${type}</span>
      <div>
        <h3>${title}</h3>
        <p>${body}</p>
        <a href="${href}" target="_blank" rel="noreferrer">${linkText}</a>
      </div>
    </article>
  `;
}

const app = document.querySelector("#app");
const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll("[data-route]");
const savedResponses = JSON.parse(localStorage.getItem("realSisterhoodResponses") || "{}");

function getRoute() {
  const route = window.location.hash.replace("#", "") || "home";
  return pages[route] ? route : "home";
}

function render() {
  const route = getRoute();
  app.innerHTML = pages[route];
  app.focus({ preventScroll: true });
  navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.route === route));
  document.body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");

  const form = document.querySelector("[data-share-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.reset();
      document.querySelector("[data-form-message]").classList.add("is-visible");
    });
  }

  document.querySelectorAll("[data-open-story]").forEach((button) => {
    button.addEventListener("click", () => openStory(button.dataset.openStory));
  });

  document.querySelectorAll("[data-open-prompt]").forEach((button) => {
    button.addEventListener("click", () => openPrompt(button.dataset.openPrompt));
  });
}

function openStory(id) {
  const story = storyData.find((item) => item.id === id);
  if (!story) return;

  openModal(`
    <article class="story-detail">
      <img src="${story.image}" alt="" />
      <p class="section-kicker">Sister Story</p>
      <h2>${story.title}</h2>
      <p>${story.detail}</p>
    </article>
  `);
}

function openPrompt(id) {
  const prompt = promptData.find((item) => item.id === id);
  if (!prompt) return;
  const responses = [...prompt.responses, ...(savedResponses[id] || [])];

  openModal(`
    <section class="prompt-thread">
      <p class="section-kicker">${prompt.theme}</p>
      <h2>${prompt.prompt}</h2>
      <div class="chat-list" data-chat-list="${prompt.id}">
        ${responses.map((response) => chatBubble(response)).join("")}
      </div>
      <form class="chat-form" data-chat-form="${prompt.id}">
        <label>
          Your name
          <input name="name" placeholder="First name" />
        </label>
        <label>
          Your response
          <textarea name="response" placeholder="Add your voice to the groupchat..." required></textarea>
        </label>
        <label class="tiny-check">
          <input type="checkbox" name="anonymous" />
          <span>Post anonymously</span>
        </label>
        <button class="button sage" type="submit">Submit to groupchat</button>
      </form>
    </section>
  `);

  document.querySelector("[data-chat-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const isAnonymous = data.get("anonymous") === "on";
    const response = {
      name: isAnonymous ? "Anonymous" : data.get("name").trim() || "Sister",
      text: data.get("response").trim()
    };

    if (!response.text) return;
    savedResponses[id] = [...(savedResponses[id] || []), response];
    localStorage.setItem("realSisterhoodResponses", JSON.stringify(savedResponses));
    document.querySelector(`[data-chat-list="${id}"]`).insertAdjacentHTML("beforeend", chatBubble(response));
    event.currentTarget.reset();
  });
}

function chatBubble(response) {
  return `
    <div class="chat-bubble">
      <strong>${escapeHtml(response.name)}</strong>
      <p>${escapeHtml(response.text)}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function openModal(content) {
  closeModal();
  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="modal-backdrop" data-modal>
        <div class="modal-panel" role="dialog" aria-modal="true">
          <button class="modal-close" type="button" aria-label="Close" data-close-modal>&times;</button>
          ${content}
        </div>
      </div>
    `
  );
  document.body.classList.add("modal-open");
  document.querySelector("[data-close-modal]").addEventListener("click", closeModal);
  document.querySelector("[data-modal]").addEventListener("click", (event) => {
    if (event.target.matches("[data-modal]")) closeModal();
  });
}

function closeModal() {
  document.querySelector("[data-modal]")?.remove();
  document.body.classList.remove("modal-open");
}

toggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", render);
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

render();
