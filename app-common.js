const SUPABASE_URL = "https://etfdhxdgczpkglgoggyt.supabase.co";
const SUPABASE_KEY = "sb_publishable_AUguEJIlOy_l87hJeHsbNw_VdwPqRAl";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function normalizarTexto(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizarUsuario(texto) {
  return String(texto || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function obterUsuarioLogado() {
  return JSON.parse(localStorage.getItem("usuarioLogado"));
}

function salvarUsuarioLogado(usuario) {
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
}

function exigirUsuarioLogado() {
  const usuarioLogado = obterUsuarioLogado();

  if (!usuarioLogado) {
    window.location.href = "login.html";
  }

  return usuarioLogado;
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}

function formatarDataBR(data) {
  if (!data) return "";

  const partes = String(data).split("-");

  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  return data;
}
