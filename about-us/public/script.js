function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[c]);
}

function lastName(name) {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1];
}

function showOfficers() {
  const rank = (role) => {
    const i = OFFICER_ORDER.indexOf(role);
    return i === -1 ? OFFICER_ORDER.length : i;
  };

  const officers = members
    .filter(isOfficer)
    .sort((a, b) => rank(a.role) - rank(b.role) || a.role.localeCompare(b.role));

  officerList.innerHTML = officers.map((m) => `
    <article class="officer">
      <p class="title">${escapeHTML(m.role)}</p>
      <h3>${escapeHTML(m.name)}</h3>
      <p class="details">${escapeHTML(m.school)} ’${escapeHTML(String(m.classYear).slice(-2))} · ${escapeHTML(m.major)}</p>
    </article>
  `).join("");
}

function showMembers() {
  const search = searchBox.value.trim().toLowerCase();
  const year = yearFilter.value;
  const cohort = cohortFilter.value;

  const matches = members
    .filter((m) => {
      if (year !== "all" && String(m.classYear) !== year) return false;
      if (cohort !== "all" && m.cohort !== cohort) return false;
      if (!search) return true;
      return [m.name, m.major, m.hometown, m.role].join(" ").toLowerCase().includes(search);
    })
    .sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)));

  count.textContent = matches.length === members.length
    ? `${members.length} members`
    : `${matches.length} of ${members.length} members`;

  empty.hidden = matches.length > 0;

  memberList.innerHTML = matches.map((m) => `
    <article class="member">
      <h3>${escapeHTML(m.name)}${isOfficer(m) ? ` <span class="officer-title">${escapeHTML(m.role)}</span>` : ""}</h3>
      <p class="major">${escapeHTML(m.major)}</p>
      <p class="details">Class of ${escapeHTML(m.classYear)} · ${escapeHTML(m.school)} · <span class="cohort">${escapeHTML(m.cohort)}</span></p>
    </article>
  `).join("");
}

function addOptions(select, values, label) {
  values.forEach((v) => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = label ? label(v) : v;
    select.appendChild(option);
  });
}

function fillFilters() {
  const years = [...new Set(members.map((m) => m.classYear))].sort();
  addOptions(yearFilter, years, (y) => `Class of ${y}`);

  const used = new Set(members.map((m) => m.cohort));
  addOptions(cohortFilter, COHORTS.filter((c) => used.has(c)), (c) => `${c} cohort`);
}

searchBox.addEventListener("input", showMembers);
yearFilter.addEventListener("change", showMembers);
cohortFilter.addEventListener("change", showMembers);

document.getElementById("clear").addEventListener("click", () => {
  searchBox.value = "";
  yearFilter.value = "all";
  cohortFilter.value = "all";
  showMembers();
});

// Close the "About Us" menu when clicking anywhere else.
document.addEventListener("click", (e) => {
  document.querySelectorAll(".nav-menu[open]").forEach((menu) => {
    if (!menu.contains(e.target)) menu.removeAttribute("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();