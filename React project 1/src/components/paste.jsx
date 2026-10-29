import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router";
import { deletePaste } from "../redux/PasteSlice";
import PasteForm from "./PasteForm";

function Paste() {
  const pastes = useSelector((state) => state.paste.items);
  const isHydrated = useSelector((state) => state.paste.isHydrated);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const editingPaste = pastes.find((paste) => paste.id === editId);
  const searchTerm = search.trim().toLocaleLowerCase();
  const matchingPastes = pastes.filter(
    (paste) =>
      paste.title.toLocaleLowerCase().includes(searchTerm) ||
      paste.content.toLocaleLowerCase().includes(searchTerm),
  );

  function handleDelete(id) {
    dispatch(deletePaste(id));

    if (id === editId) {
      setSearchParams({});
    }
  }

  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">YOUR PERSONAL ARCHIVE</p>
        <h1>All your pastes.</h1>
        <p className="intro-copy">
          Search, open, edit, or remove anything you have saved.
        </p>
      </section>
      {!isHydrated && <p role="status">Loading your pastes...</p>}
      {editId && !editingPaste && (
        <p className="form-error" role="alert">
          That paste could not be found.
        </p>
      )}
      {editingPaste && <PasteForm paste={editingPaste} embedded />}
      <section className="archive-section">
        <div className="archive-heading">
          <div className="section-heading">
            <span className="section-number">01</span>
            <h2>Saved pastes</h2>
          </div>
          <span className="count-badge">
            {isHydrated ? `${pastes.length} TOTAL` : "LOADING"}
          </span>
        </div>
        <div className="search-field">
          <span aria-hidden="true" className="search-icon">⌕</span>
        <input
          id="paste-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search title or content"
          aria-label="Search pastes"
        />
        </div>
      {!isHydrated ? null : matchingPastes.length === 0 ? (
        <div className="empty-state brutal-card">
          <span className="empty-icon" aria-hidden="true">
            {pastes.length === 0 ? "+" : "⌕"}
          </span>
          <h2>{pastes.length === 0 ? "Nothing saved yet." : "No matches found."}</h2>
          <p>
            {pastes.length === 0
              ? "Create your first paste and it will be waiting here."
              : "Try a different title or phrase."}
          </p>
          {pastes.length === 0 && (
            <Link className="button button-primary" to="/home">
              Create a paste <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      ) : (
        <ul className="paste-grid">
          {matchingPastes.map((paste) => (
            <li className="paste-card brutal-card" key={paste.id}>
              <div className="paste-card-top">
                <span className="card-tag">SAVED PASTE</span>
                <span className="card-dot" aria-hidden="true">●</span>
              </div>
              <h2 className="paste-card-title">
                <Link className="paste-title-link" to={`/paste/${encodeURIComponent(paste.id)}`}>
                  {paste.title}
                </Link>
              </h2>
              <p className="paste-preview">{paste.content.slice(0, 160)}</p>
              <div className="paste-card-footer">
                <span className="paste-date">
                  UPDATED {new Date(paste.updatedAt).toLocaleDateString()}
                </span>
                <div className="paste-card-actions">
                  <Link
                    className="small-action"
                    to={`/paste?edit=${encodeURIComponent(paste.id)}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="small-action small-action-danger"
                    type="button"
                    onClick={() => handleDelete(paste.id)}
                  >
                Delete
              </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      </section>
    </main>
  );
}

export default Paste;
