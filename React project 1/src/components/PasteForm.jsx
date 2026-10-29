import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { addPaste, updatePaste } from "../redux/PasteSlice";

function PasteForm({ paste, embedded = false }) {
  const dispatch = useDispatch();
  const isHydrated = useSelector((state) => state.paste.isHydrated);
  const pastes = useSelector((state) => state.paste.items);
  const navigate = useNavigate();
  const [title, setTitle] = useState(paste?.title ?? "");
  const [content, setContent] = useState(paste?.content ?? "");
  const [error, setError] = useState("");
  const recentPastes = [...pastes]
    .filter((item) => item.id !== paste?.id)
    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt))
    .slice(0, 4);

  function handleSubmit(event) {
    event.preventDefault();

    if (!isHydrated) {
      return;
    }

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) {
      setError("Enter both a title and paste content.");
      return;
    }

    const updatedAt = new Date().toISOString();

    if (paste) {
      dispatch(
        updatePaste({
          id: paste.id,
          title: trimmedTitle,
          content: trimmedContent,
          updatedAt,
        }),
      );
    } else {
      dispatch(
        addPaste({
          id: crypto.randomUUID(),
          title: trimmedTitle,
          content: trimmedContent,
          createdAt: updatedAt,
          updatedAt,
        }),
      );
    }

    navigate("/paste");
  }

  const Container = embedded ? "section" : "main";

  return (
    <Container className={embedded ? "embedded-form" : "page-main"}>
      <section className="page-intro">
        <p className="eyebrow">YOUR WORDS. YOUR SPACE.</p>
        <h1>{paste ? "Edit your paste." : "Save it for later."}</h1>
        <p className="intro-copy">
          Keep snippets, notes, and little bits of code in one easy place.
        </p>
      </section>

      <div className="workspace-grid">
        <form className="paste-form brutal-card" onSubmit={handleSubmit}>
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>{paste ? "Edit paste" : "New paste"}</h2>
          </div>
          {!isHydrated && <p role="status">Loading your pastes...</p>}
          <div className="form-field">
            <label htmlFor="paste-title">TITLE</label>
            <input
              id="paste-title"
              name="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Give this paste a name"
              maxLength={120}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="paste-content">CONTENT</label>
            <textarea
              id="paste-content"
              name="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Paste your text or code here..."
              required
              rows={12}
            />
            <span className="field-hint">
              {content.length.toLocaleString()} characters
            </span>
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <div className="form-actions">
            <button className="button button-primary" type="submit" disabled={!isHydrated}>
              {paste ? "Update paste" : "Save paste"}
              <span aria-hidden="true">↗</span>
            </button>
            {paste && (
              <Link className="button button-secondary" to="/paste">
                Cancel
              </Link>
            )}
          </div>
        </form>

        <aside className="recent-panel brutal-card">
          <div className="section-heading">
            <span className="section-number section-number-yellow">02</span>
            <h2>Recent pastes</h2>
          </div>
          {!isHydrated ? (
            <p className="muted-copy">Loading your pastes...</p>
          ) : recentPastes.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">
                +
              </span>
              <p>{pastes.length === 0 ? "Your saved pastes will show up here." : "No other pastes yet."}</p>
            </div>
          ) : (
            <ul className="recent-list">
              {recentPastes.map((item, index) => (
                <li className="recent-item" key={item.id}>
                  <span className={`list-index list-index-${index % 4}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Link
                    className="recent-link"
                    to={`/paste/${encodeURIComponent(item.id)}`}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.content.slice(0, 72) || "No content"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link className="text-link" to="/paste">
            Browse all pastes <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </div>
    </Container>
  );
}

export default PasteForm;
