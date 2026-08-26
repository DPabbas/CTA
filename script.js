:root {
    --bg-main: #0b0f14;
    --bg-card: #141b24;
    --bg-input: #1a2330;

    --border: #263445;

    --accent: #2f80ed;
    --success: #00c076;

    --text: #ffffff;
    --text-muted: #9ca3af;

    --shadow:
        0 10px 30px rgba(0,0,0,.35);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;

    background: linear-gradient(
        135deg,
        #0b0f14,
        #101722
    );

    font-family:
        Inter,
        Segoe UI,
        sans-serif;

    color: var(--text);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
}

.wrapper {
    width: 100%;
    max-width: 1100px;
}

h1 {
    text-align: center;
    margin-bottom: 40px;

    font-size: 2.3rem;
    font-weight: 700;

    color: white;
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.card {
    background: rgba(20, 27, 36, 0.9);

    backdrop-filter: blur(10px);

    border: 1px solid rgba(255,255,255,.06);

    border-radius: 20px;

    padding: 28px;

    box-shadow: var(--shadow);

    transition: .3s;
}

.card:hover {
    transform: translateY(-4px);
}

.title {
    font-size: 1.2rem;
    font-weight: 700;

    color: var(--accent);

    margin-bottom: 25px;
}

label {
    display: block;

    margin-bottom: 8px;
    margin-top: 16px;

    color: var(--text-muted);

    font-size: .95rem;
}

input {
    width: 100%;

    background: var(--bg-input);

    border: 1px solid var(--border);

    border-radius: 12px;

    padding: 14px 16px;

    color: white;

    font-size: 1rem;

    transition: .25s;
}

input:focus {
    outline: none;

    border-color: var(--accent);

    box-shadow:
        0 0 0 4px rgba(47,128,237,.15);
}

.result {
    margin-top: 18px;

    padding: 16px;

    border-radius: 12px;

    background: rgba(0,192,118,.08);

    border: 1px solid rgba(0,192,118,.25);

    line-height: 1.9;

    color: #e5fdf2;

    min-height: 55px;
}

.result strong {
    color: var(--success);
    font-size: 1.05rem;
}

@media (max-width: 768px) {

    h1 {
        font-size: 1.8rem;
    }

    .container {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 22px;
    }
}
