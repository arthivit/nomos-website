export default function Home() {
    return (
        <main className="main">
            <h1>Nomos Calendar</h1>

            <p>
                View the Philonomosian society's upcoming event schedule
            </p>

            <section>
                <h2>About This Project</h2>
                <p>
                    This website uses Next.js, React, and CSS.
                </p>

                <iframe
                    src="https://calendar.google.com/calendar/embed?src=c_41d8060d79ea49148ca074d977f646f50deeba7700198d4f4b11e9741f262be5%40group.calendar.google.com&ctz=America%2FNew_York"
                    style={{ border: 0 }}
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Google Calendar"
                />
            </section>
        </main>
    );
}