// index.tsx
import React3 from "react";
import ReactDOM from "react-dom/client";

// components/DavitaDemo.tsx
import React from "react";
import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Database,
  Download,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Filter,
  History,
  Hourglass,
  Landmark,
  Lock,
  LockOpen,
  Menu,
  Paperclip,
  Pencil,
  Plus,
  ReceiptText,
  Search,
  ShieldCheck,
  Trash2,
  UploadCloud,
  UserCheck,
  Users,
  Wallet,
  XCircle
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { jsx, jsxs } from "react/jsx-runtime";
var honorariosSeed = [
  {
    id: "h1",
    rut: "17119276-5",
    nombre: "Maria Jose Aguilera Herrera",
    cargo: "Auxiliar de Enfermeria",
    cargoInforme: "Auxiliar de Enfermeria",
    centro: "AGUDOS",
    centroCosto: "Facilities Operat./Acute Unit Vina",
    gerente: "Paula Ceron",
    tipoPago: "HORAS",
    pactoFirmado: true,
    activo: true,
    valorLav: 4500,
    valorSabado: 4500,
    valorFestivo: 4800,
    valorCuartoTurno: 4800,
    valorCuartoFestivo: 5200,
    cuenta: "6011",
    department: "Operations",
    location: "Vina del Mar",
    modality: "Acute",
    financialClass: "Honorarios"
  },
  {
    id: "h2",
    rut: "16573686-9",
    nombre: "Nicolas Patricio Aguilera Herrera",
    cargo: "Enfermero(a) de Dialisis",
    cargoInforme: "Enfermero(a) de Dialisis",
    centro: "AGUDOS",
    centroCosto: "Facilities Operat./Acute Unit Vina",
    gerente: "Paula Ceron",
    tipoPago: "HORAS",
    pactoFirmado: true,
    activo: true,
    valorLav: 15e3,
    valorSabado: 15e3,
    valorFestivo: 17500,
    cuenta: "6011",
    department: "Nursing",
    location: "Vina del Mar",
    modality: "Acute",
    financialClass: "Honorarios"
  },
  {
    id: "h3",
    rut: "18300309-7",
    nombre: "Anyelina Garrido Aguilera",
    cargo: "Enfermero(a) de Dialisis",
    cargoInforme: "Enfermero(a) de Dialisis",
    centro: "AGUDOS",
    centroCosto: "Facilities Operat./Acute Unit Vina",
    gerente: "Paula Ceron",
    tipoPago: "HORAS",
    pactoFirmado: true,
    activo: true,
    valorLav: 15e3,
    valorSabado: 15e3,
    valorFestivo: 17500,
    cuenta: "6011",
    department: "Nursing",
    location: "Vina del Mar",
    modality: "Acute",
    financialClass: "Honorarios"
  },
  {
    id: "h4",
    rut: "76030768-8",
    nombre: "Soc. de Prof. Roessler y Bazana Ltda.",
    cargo: "Director Medico",
    cargoInforme: "Director Tecnico",
    centro: "AGUDOS",
    centroCosto: "Facilities Operat./Acute Unit Vina",
    gerente: "Paula Ceron",
    tipoPago: "FIJO",
    pactoFirmado: true,
    activo: true,
    valorMensual: 16e5,
    cuenta: "6011",
    department: "Medical Direction",
    location: "Vina del Mar",
    modality: "Acute",
    financialClass: "Honorarios Sociedad"
  },
  {
    id: "h5",
    rut: "8032553-3",
    nombre: "Marcelo Orlando Calderara Burgos",
    cargo: "Medico Turno PD",
    cargoInforme: "Medico de Turno",
    centro: "ARAUCANIA",
    centroCosto: "Facilities Operat./Araucania",
    gerente: "Cristian Cesped",
    tipoPago: "PACIENTES",
    pactoFirmado: true,
    activo: true,
    valorPaciente: 5e4,
    cuenta: "6011",
    department: "Medical",
    location: "Araucania",
    modality: "Peritoneal",
    financialClass: "Honorarios"
  },
  {
    id: "h6",
    rut: "18925423-7",
    nombre: "Meiling Alejandra Hipp Gomez",
    cargo: "Enfermero(a) de Dialisis",
    cargoInforme: "Enfermero(a) de Dialisis",
    centro: "INDEPENDENCIA",
    centroCosto: "Facilities Operat./Independencia",
    gerente: "Gabriel Vergara",
    tipoPago: "HORAS",
    pactoFirmado: false,
    activo: true,
    valorLav: 1e4,
    valorSabado: 1e4,
    valorFestivo: 10500,
    cuenta: "6011",
    department: "Nursing",
    location: "Independencia",
    modality: "Chronic",
    financialClass: "Honorarios"
  },
  {
    id: "h7",
    rut: "16573686-9",
    nombre: "Nicolas Patricio Aguilera Herrera",
    cargo: "Enfermero(a) de Dialisis",
    cargoInforme: "Enfermero(a) de Dialisis",
    centro: "SAN BERNARDO",
    centroCosto: "Facilities Operat./San Bernardo",
    gerente: "Roxana Fuentes",
    tipoPago: "HORAS",
    pactoFirmado: true,
    activo: true,
    valorLav: 15e3,
    valorSabado: 15e3,
    valorFestivo: 17500,
    cuenta: "6011",
    department: "Nursing",
    location: "San Bernardo",
    modality: "Chronic",
    financialClass: "Honorarios"
  }
];
var movimientosSeed = [
  {
    id: "m1",
    honorarioId: "h1",
    periodo: "2026-04",
    horasLav: 55,
    horasSabado: 0,
    horasFestivo: 40,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 0,
    bruto: 439500,
    retencion: 67023.75,
    liquido: 372476.25,
    boletaPdf: true,
    folio: "BH-418221",
    montoBoleta: 439500,
    estado: "APROBADA_RRHH",
    sii: "VALIDADA",
    fechaIngreso: "2026-04-29",
    enfermeraJefe: "Carolina Silva"
  },
  {
    id: "m2",
    honorarioId: "h2",
    periodo: "2026-04",
    horasLav: 4.33,
    horasSabado: 0,
    horasFestivo: 4.58,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 0,
    bruto: 145100,
    retencion: 22127.75,
    liquido: 122972.25,
    boletaPdf: true,
    folio: "BH-418245",
    montoBoleta: 145100,
    estado: "VALIDADA_SII",
    sii: "VALIDADA",
    fechaIngreso: "2026-04-29",
    enfermeraJefe: "Carolina Silva"
  },
  {
    id: "m3",
    honorarioId: "h3",
    periodo: "2026-04",
    horasLav: 14.5,
    horasSabado: 0,
    horasFestivo: 4,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 0,
    bruto: 287500,
    retencion: 43843.75,
    liquido: 243656.25,
    boletaPdf: false,
    montoBoleta: void 0,
    estado: "PENDIENTE_BOLETA",
    sii: "NO_VALIDADA",
    fechaIngreso: "2026-04-30",
    enfermeraJefe: "Carolina Silva",
    provisionado: true
  },
  {
    id: "m4",
    honorarioId: "h4",
    periodo: "2026-04",
    horasLav: 0,
    horasSabado: 0,
    horasFestivo: 0,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 1,
    bruto: 16e5,
    retencion: 0,
    liquido: 16e5,
    boletaPdf: true,
    folio: "BH-418300",
    montoBoleta: 16e5,
    estado: "CENTRALIZADA",
    sii: "VALIDADA",
    fechaIngreso: "2026-04-28",
    enfermeraJefe: "Paula Ceron"
  },
  {
    id: "m5",
    honorarioId: "h5",
    periodo: "2026-04",
    horasLav: 0,
    horasSabado: 0,
    horasFestivo: 0,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 29,
    mensual: 0,
    bruto: 145e4,
    retencion: 221125,
    liquido: 1228875,
    boletaPdf: true,
    folio: "BH-418355",
    montoBoleta: 145e4,
    estado: "VALIDADA_SII",
    sii: "VALIDADA",
    fechaIngreso: "2026-04-30",
    enfermeraJefe: "Andrea Ramirez"
  },
  {
    id: "m6",
    honorarioId: "h6",
    periodo: "2026-04",
    horasLav: 30,
    horasSabado: 0,
    horasFestivo: 0,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 0,
    bruto: 3e5,
    retencion: 45750,
    liquido: 254250,
    boletaPdf: true,
    folio: "BH-418401",
    montoBoleta: 3e5,
    estado: "OBSERVADA_RRHH",
    observacion: "Pacto firmado no cargado en ficha.",
    sii: "NO_VALIDADA",
    fechaIngreso: "2026-04-30",
    enfermeraJefe: "Roxana Fuentes",
    provisionado: true
  },
  {
    id: "m7",
    honorarioId: "h7",
    periodo: "2026-04",
    horasLav: 18,
    horasSabado: 6,
    horasFestivo: 0,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    mensual: 0,
    bruto: 36e4,
    retencion: 54900,
    liquido: 305100,
    boletaPdf: true,
    folio: "BH-418502",
    montoBoleta: 36e4,
    estado: "APROBADA_RRHH",
    sii: "VALIDADA",
    fechaIngreso: "2026-04-30",
    enfermeraJefe: "Roxana Fuentes"
  }
];
var navItems = [
  { id: "dashboard", label: "Dashboard", icon: /* @__PURE__ */ jsx(Database, { size: 19 }) },
  { id: "maestro", label: "Base Honorarios", icon: /* @__PURE__ */ jsx(Users, { size: 19 }) },
  { id: "carga", label: "Carga Enfermera", icon: /* @__PURE__ */ jsx(UploadCloud, { size: 19 }) },
  { id: "validacion", label: "Validacion RRHH", icon: /* @__PURE__ */ jsx(ClipboardCheck, { size: 19 }) },
  { id: "contabilidad", label: "Centralizacion", icon: /* @__PURE__ */ jsx(Landmark, { size: 19 }) },
  { id: "trazabilidad", label: "Trazabilidad", icon: /* @__PURE__ */ jsx(History, { size: 19 }) }
];
var estadoLabel = {
  PENDIENTE_BOLETA: { label: "Pendiente boleta", className: "bg-amber-50 text-amber-700 border-amber-200", icon: /* @__PURE__ */ jsx(Hourglass, { size: 13 }) },
  BOLETA_ADJUNTA: { label: "Boleta adjunta", className: "bg-blue-50 text-blue-700 border-blue-200", icon: /* @__PURE__ */ jsx(Paperclip, { size: 13 }) },
  OBSERVADA_RRHH: { label: "Observada RRHH", className: "bg-orange-50 text-orange-700 border-orange-200", icon: /* @__PURE__ */ jsx(AlertTriangle, { size: 13 }) },
  APROBADA_RRHH: { label: "Aprobada RRHH", className: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }) },
  VALIDADA_SII: { label: "Validada SII", className: "bg-blue-50 text-blue-700 border-blue-200", icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 13 }) },
  CENTRALIZADA: { label: "Centralizada", className: "bg-slate-100 text-slate-700 border-slate-200", icon: /* @__PURE__ */ jsx(BookOpenCheck, { size: 13 }) }
};
var money = (value) => value.toLocaleString("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});
var exportExcel = (filename, rows, sheetName = "Datos") => {
  const headers = Array.from(rows.reduce((set, row) => {
    Object.keys(row).forEach((key) => set.add(key));
    return set;
  }, /* @__PURE__ */ new Set()));
  const escapeCell = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const html = `
    <html>
      <head><meta charset="utf-8" /></head>
      <body>
        <table>
          <caption>${escapeCell(sheetName)}</caption>
          <thead><tr>${headers.map((header) => `<th>${escapeCell(header)}</th>`).join("")}</tr></thead>
          <tbody>
            ${rows.map((row) => `<tr>${headers.map((header) => `<td>${escapeCell(row[header])}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;
  const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.replace(/\.xlsx$/i, ".xls");
  link.click();
  URL.revokeObjectURL(url);
};
var printDashboardPdf = () => {
  window.print();
};
var calculateDraft = (honorario, draft) => {
  if (honorario.tipoPago === "FIJO") return honorario.valorMensual || 0;
  if (honorario.tipoPago === "PACIENTES") return draft.pacientes * (honorario.valorPaciente || 0);
  return draft.horasLav * (honorario.valorLav || 0) + draft.horasSabado * (honorario.valorSabado || 0) + draft.horasFestivo * (honorario.valorFestivo || 0) + draft.cuartoTurno * (honorario.valorCuartoTurno || 0) + draft.cuartoFestivo * (honorario.valorCuartoFestivo || 0);
};
var DavitaDemo = () => {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [honorarios, setHonorarios] = React.useState(honorariosSeed);
  const [movimientos, setMovimientos] = React.useState(movimientosSeed);
  const [query, setQuery] = React.useState("");
  const [centroFilter, setCentroFilter] = React.useState("Todos");
  const [editingHonorario, setEditingHonorario] = React.useState(null);
  const [isHonorarioFormOpen, setIsHonorarioFormOpen] = React.useState(false);
  const [cierreBloqueado, setCierreBloqueado] = React.useState(false);
  const [draft, setDraft] = React.useState({
    honorarioId: "h1",
    fechaIngreso: "2026-04-30",
    enfermeraJefe: "Roxana Fuentes",
    horasLav: 24,
    horasSabado: 8,
    horasFestivo: 0,
    cuartoTurno: 0,
    cuartoFestivo: 0,
    pacientes: 0,
    boletaAdjunta: false,
    montoBoletaOcr: 0
  });
  const byId = React.useMemo(() => Object.fromEntries(honorarios.map((h) => [h.id, h])), [honorarios]);
  const selectedHonorario = byId[draft.honorarioId] || honorarios[0];
  const centros = React.useMemo(() => ["Todos", ...Array.from(new Set(honorarios.map((h) => h.centro)))], [honorarios]);
  React.useEffect(() => {
    if (!byId[draft.honorarioId] && honorarios[0]) {
      setDraft((current) => ({ ...current, honorarioId: honorarios[0].id }));
    }
  }, [byId, draft.honorarioId, honorarios]);
  const enriched = React.useMemo(() => movimientos.flatMap((m) => {
    const honorario = byId[m.honorarioId];
    return honorario ? [{ ...m, honorario }] : [];
  }), [movimientos, byId]);
  const filteredHonorarios = honorarios.filter((h) => {
    const matchesQuery = `${h.rut} ${h.nombre} ${h.cargo} ${h.centro}`.toLowerCase().includes(query.toLowerCase());
    const matchesCentro = centroFilter === "Todos" || h.centro === centroFilter;
    return matchesQuery && matchesCentro;
  });
  const honorariosRows = (items) => items.map((h) => ({
    RUT: h.rut,
    Nombre: h.nombre,
    Cargo: h.cargo,
    Centro: h.centro,
    "Centro costo": h.centroCosto,
    Gerente: h.gerente,
    "Tipo pago": h.tipoPago,
    "Pacto firmado": h.pactoFirmado ? "Si" : "No",
    Activo: h.activo ? "Si" : "No",
    "Valor LaV": h.valorLav || 0,
    "Valor sabado": h.valorSabado || 0,
    "Valor festivo": h.valorFestivo || 0,
    "Valor mensual": h.valorMensual || 0,
    "Valor paciente": h.valorPaciente || 0,
    Cuenta: h.cuenta,
    Department: h.department,
    Location: h.location,
    Modality: h.modality,
    "Financial Class": h.financialClass
  }));
  const movimientosRows = (items) => items.map((m) => ({
    Periodo: m.periodo,
    "Fecha ingreso": m.fechaIngreso,
    "Enfermera jefe": m.enfermeraJefe,
    RUT: m.honorario.rut,
    Nombre: m.honorario.nombre,
    Centro: m.honorario.centro,
    "Centro costo": m.honorario.centroCosto,
    Cuenta: m.honorario.cuenta,
    Department: m.honorario.department,
    Location: m.honorario.location,
    Modality: m.honorario.modality,
    "Financial Class": m.honorario.financialClass,
    "Horas LaV": m.horasLav,
    "Horas sabado": m.horasSabado,
    "Horas festivo": m.horasFestivo,
    Pacientes: m.pacientes,
    Bruto: m.bruto,
    Retencion: m.retencion,
    Liquido: m.liquido,
    "Monto boleta OCR": m.montoBoleta || 0,
    Folio: m.folio || "",
    Estado: estadoLabel[m.estado].label,
    Provisionado: m.provisionado ? "Si" : "No",
    Observacion: m.observacion || ""
  }));
  const stats = React.useMemo(() => {
    const bruto = movimientos.reduce((acc, item) => acc + item.bruto, 0);
    const liquido = movimientos.reduce((acc, item) => acc + item.liquido, 0);
    const pendientes = movimientos.filter((m) => ["PENDIENTE_BOLETA", "OBSERVADA_RRHH"].includes(m.estado)).length;
    const listasPago = movimientos.filter((m) => ["APROBADA_RRHH", "VALIDADA_SII", "CENTRALIZADA"].includes(m.estado)).length;
    return { bruto, liquido, pendientes, listasPago };
  }, [movimientos]);
  const chartByCentro = React.useMemo(() => {
    const grouped = /* @__PURE__ */ new Map();
    enriched.forEach((m) => {
      const key = m.honorario.centro;
      const current = grouped.get(key) || { centro: key, bruto: 0, registros: 0 };
      current.bruto += m.bruto;
      current.registros += 1;
      grouped.set(key, current);
    });
    return Array.from(grouped.values()).sort((a, b) => b.bruto - a.bruto);
  }, [enriched]);
  const chartPipeline = [
    { name: "Base abril", value: 747 },
    { name: "Boleta OK", value: 741 },
    { name: "Pendiente", value: 6 },
    { name: "Sin cuenta", value: 20 }
  ];
  const DAVITA_COLORS = {
    primary: "#0069b1",
    navy: "#283764",
    magenta: "#d20f55",
    green: "#779f09",
    orange: "#ee8000",
    yellow: "#ffc100"
  };
  const DAVITA_LOGO = "./logo-davita.png";
  const openNewHonorario = () => {
    setEditingHonorario(null);
    setIsHonorarioFormOpen(true);
  };
  const openEditHonorario = (honorario) => {
    setEditingHonorario(honorario);
    setIsHonorarioFormOpen(true);
  };
  const saveHonorario = (honorario) => {
    setHonorarios((items) => {
      const exists = items.some((item) => item.id === honorario.id);
      return exists ? items.map((item) => item.id === honorario.id ? honorario : item) : [honorario, ...items];
    });
    setDraft((current) => ({ ...current, honorarioId: honorario.id }));
    setIsHonorarioFormOpen(false);
    setEditingHonorario(null);
  };
  const deleteHonorario = (id) => {
    const honorario = honorarios.find((item) => item.id === id);
    if (!honorario) return;
    if (!window.confirm(`Eliminar a ${honorario.nombre} de la base de honorarios?`)) return;
    const remaining = honorarios.filter((item) => item.id !== id);
    setHonorarios(remaining);
    setMovimientos((items) => items.filter((item) => item.honorarioId !== id));
    if (draft.honorarioId === id && remaining[0]) {
      setDraft((current) => ({ ...current, honorarioId: remaining[0].id }));
    }
  };
  const approve = (id) => {
    setMovimientos((items) => items.map((m) => {
      if (m.id !== id) return m;
      const h = byId[m.honorarioId];
      if (!h.pactoFirmado) {
        return { ...m, estado: "OBSERVADA_RRHH", observacion: "Pacto firmado no cargado en ficha." };
      }
      if (!m.boletaPdf) {
        return { ...m, estado: "PENDIENTE_BOLETA", provisionado: true, observacion: "Falta adjuntar boleta PDF." };
      }
      const match = Math.abs((m.montoBoleta || 0) - m.bruto) <= 1;
      return match ? { ...m, estado: "APROBADA_RRHH", provisionado: false, observacion: void 0 } : { ...m, estado: "OBSERVADA_RRHH", provisionado: true, observacion: `Monto boleta ${money(m.montoBoleta || 0)} no coincide con ${money(m.bruto)}.` };
    }));
  };
  const validateSii = (id) => {
    setMovimientos((items) => items.map((m) => m.id === id ? { ...m, estado: "VALIDADA_SII", sii: "VALIDADA", folio: m.folio || "BH-419002", provisionado: false } : m));
  };
  const centralize = () => {
    setMovimientos((items) => items.map((m) => ["APROBADA_RRHH", "VALIDADA_SII"].includes(m.estado) ? { ...m, estado: "CENTRALIZADA", provisionado: false } : ["PENDIENTE_BOLETA", "OBSERVADA_RRHH"].includes(m.estado) ? { ...m, provisionado: true } : m));
  };
  const attachBoleta = (id) => {
    setMovimientos((items) => items.map((m) => m.id === id ? { ...m, boletaPdf: true, montoBoleta: m.bruto, folio: "BH-419104", estado: "BOLETA_ADJUNTA", provisionado: false, observacion: "OCR detecto monto bruto coincidente." } : m));
  };
  const runOcr = (id, forceMismatch = false) => {
    setMovimientos((items) => items.map((m) => {
      if (m.id !== id) return m;
      const monto = forceMismatch ? m.bruto + 3e3 : m.bruto;
      const match = Math.abs(monto - m.bruto) <= 1;
      return {
        ...m,
        boletaPdf: true,
        montoBoleta: monto,
        folio: m.folio || "BH-419104",
        estado: match ? "BOLETA_ADJUNTA" : "OBSERVADA_RRHH",
        provisionado: !match,
        observacion: match ? "OCR detecto monto bruto coincidente." : `OCR detecto ${money(monto)} y no coincide con el bruto ${money(m.bruto)}.`
      };
    }));
  };
  const createDraft = () => {
    const bruto = calculateDraft(selectedHonorario, draft);
    const retencion = selectedHonorario.tipoPago === "FIJO" ? 0 : bruto * 0.1525;
    const hasBoleta = draft.boletaAdjunta;
    const montoOcr = hasBoleta ? draft.montoBoletaOcr || bruto : void 0;
    const match = montoOcr !== void 0 && Math.abs(montoOcr - bruto) <= 1;
    const item = {
      id: `m${Date.now()}`,
      honorarioId: selectedHonorario.id,
      periodo: "2026-04",
      fechaIngreso: draft.fechaIngreso,
      enfermeraJefe: draft.enfermeraJefe,
      horasLav: draft.horasLav,
      horasSabado: draft.horasSabado,
      horasFestivo: draft.horasFestivo,
      cuartoTurno: draft.cuartoTurno,
      cuartoFestivo: draft.cuartoFestivo,
      pacientes: draft.pacientes,
      mensual: selectedHonorario.tipoPago === "FIJO" ? 1 : 0,
      bruto,
      retencion,
      liquido: bruto - retencion,
      boletaPdf: hasBoleta,
      montoBoleta: montoOcr,
      folio: hasBoleta ? "BH-419640" : void 0,
      estado: !hasBoleta ? "PENDIENTE_BOLETA" : match ? "BOLETA_ADJUNTA" : "OBSERVADA_RRHH",
      observacion: !hasBoleta ? "Solicitud generada pendiente: la enfermera no adjunto boleta." : match ? "OCR detecto monto bruto coincidente." : `OCR detecto ${money(montoOcr || 0)} y no coincide con el bruto ${money(bruto)}.`,
      sii: "NO_VALIDADA",
      provisionado: !hasBoleta || !match
    };
    setMovimientos((items) => [item, ...items]);
    setActiveTab("validacion");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f4f6f8] text-[#414141] font-['Lato']", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-screen overflow-hidden", children: [
      /* @__PURE__ */ jsxs("aside", { className: `shrink-0 bg-white text-[#414141] border-r border-slate-200 transition-all duration-300 ${sidebarOpen ? "w-72" : "w-20"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "h-20 px-5 flex items-center gap-3 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: DAVITA_LOGO, alt: "DaVita", className: "w-10 object-contain" }) }),
          sidebarOpen && /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-black leading-none text-[#0069b1]", children: "DaVita" }),
            /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.24em] text-[#d20f55] mt-1", children: "Boletator demo" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "p-3 space-y-1", children: navItems.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveTab(item.id),
            className: `w-full h-12 px-4 rounded-xl flex items-center gap-3 text-sm font-bold transition-all ${activeTab === item.id ? "bg-[#0069b1] text-white shadow-lg shadow-blue-900/10" : "text-slate-500 hover:text-[#0069b1] hover:bg-blue-50"}`,
            title: item.label,
            children: [
              item.icon,
              sidebarOpen && /* @__PURE__ */ jsx("span", { className: "truncate", children: item.label })
            ]
          },
          item.id
        )) }),
        sidebarOpen && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 w-72 p-4 border-t border-slate-200 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-blue-100 bg-blue-50 p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#0069b1]", children: "Base cargada" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-black text-[#283764]", children: "Abril 2026" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-600", children: "747 registros, 483 RUT y 64 centros importados desde Excel." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("main", { className: "flex-1 overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxs("header", { className: "h-20 bg-white border-b-4 border-[#0069b1] px-6 flex items-center justify-between shrink-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSidebarOpen((value) => !value),
                className: "h-10 w-10 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center",
                title: "Menu",
                children: /* @__PURE__ */ jsx(Menu, { size: 19 })
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-slate-500", children: [
                "Portal honorarios ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 14 }),
                " ",
                navItems.find((item) => item.id === activeTab)?.label
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black tracking-tight text-[#283764]", children: "Control de boletas honorarios DaVita" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-200 px-4 py-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Rol demo" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-black", children: "RRHH Corporativo" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-[#d20f55] text-white flex items-center justify-center font-black", children: "R" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          activeTab === "dashboard" && /* @__PURE__ */ jsx(
            DashboardView,
            {
              stats,
              chartByCentro,
              chartPipeline,
              movimientos: enriched,
              cierreBloqueado,
              setCierreBloqueado
            }
          ),
          activeTab === "maestro" && /* @__PURE__ */ jsx(
            MaestroView,
            {
              honorarios: filteredHonorarios,
              totalHonorarios: honorarios.length,
              query,
              setQuery,
              centroFilter,
              setCentroFilter,
              centros,
              onAdd: openNewHonorario,
              onEdit: openEditHonorario,
              onDelete: deleteHonorario,
              onExport: () => exportExcel("base-honorarios-davita.xlsx", honorariosRows(filteredHonorarios), "Base Honorarios")
            }
          ),
          activeTab === "carga" && /* @__PURE__ */ jsx(
            CargaView,
            {
              honorarios,
              movimientos: enriched,
              draft,
              setDraft,
              selectedHonorario,
              createDraft,
              cierreBloqueado,
              onExportReporte: (rows) => exportExcel("reporte-solicitudes-enfermera.xlsx", movimientosRows(rows), "Solicitudes")
            }
          ),
          activeTab === "validacion" && /* @__PURE__ */ jsx(
            ValidacionView,
            {
              movimientos: enriched,
              approve,
              attachBoleta,
              runOcr,
              validateSii,
              onExport: () => exportExcel("validacion-rrhh-davita.xlsx", movimientosRows(enriched), "Validacion RRHH")
            }
          ),
          activeTab === "contabilidad" && /* @__PURE__ */ jsx(
            ContabilidadView,
            {
              movimientos: enriched,
              centralize,
              onExport: () => exportExcel("centralizacion-davita.xlsx", movimientosRows(enriched), "Centralizacion")
            }
          ),
          activeTab === "trazabilidad" && /* @__PURE__ */ jsx(
            TrazabilidadView,
            {
              movimientos: enriched,
              onExport: () => exportExcel("trazabilidad-davita.xlsx", movimientosRows(enriched), "Trazabilidad")
            }
          )
        ] })
      ] })
    ] }),
    isHonorarioFormOpen && /* @__PURE__ */ jsx(
      HonorarioFormModal,
      {
        honorario: editingHonorario,
        onClose: () => {
          setIsHonorarioFormOpen(false);
          setEditingHonorario(null);
        },
        onSave: saveHonorario
      }
    )
  ] });
};
var DashboardView = ({ stats, chartByCentro, chartPipeline, movimientos, cierreBloqueado, setCierreBloqueado }) => {
  const observadas = movimientos.filter((m) => m.estado === "OBSERVADA_RRHH").length;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 print:hidden", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Panel ejecutivo" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Descarga el resumen en PDF y bloquea la carga al cierre del mes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: printDashboardPdf,
            className: "h-11 rounded-xl border border-slate-200 px-4 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsx(FileText, { size: 17 }),
              " Descargar PDF"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setCierreBloqueado((value) => !value),
            className: `h-11 rounded-xl px-4 text-sm font-black inline-flex items-center justify-center gap-2 ${cierreBloqueado ? "bg-[#d20f55] text-white" : "bg-[#779f09] text-white"}`,
            children: [
              cierreBloqueado ? /* @__PURE__ */ jsx(Lock, { size: 17 }) : /* @__PURE__ */ jsx(LockOpen, { size: 17 }),
              cierreBloqueado ? "Carga bloqueada" : "Carga abierta"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsx(Metric, { title: "Bruto abril", value: money(stats.bruto), icon: /* @__PURE__ */ jsx(Wallet, {}), accent: "cyan", detail: "Muestra demo" }),
      /* @__PURE__ */ jsx(Metric, { title: "Liquido abril", value: money(stats.liquido), icon: /* @__PURE__ */ jsx(Banknote, {}), accent: "emerald", detail: "Post retencion" }),
      /* @__PURE__ */ jsx(Metric, { title: "Listas para pago", value: stats.listasPago.toString(), icon: /* @__PURE__ */ jsx(CheckCircle2, {}), accent: "blue", detail: "RRHH/SII/Contabilidad" }),
      /* @__PURE__ */ jsx(Metric, { title: "Con alerta", value: (stats.pendientes + observadas).toString(), icon: /* @__PURE__ */ jsx(AlertTriangle, {}), accent: "amber", detail: "Falta boleta o pacto" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsxs("section", { className: "xl:col-span-3 bg-white border border-slate-200 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-black", children: "Gasto por centro" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Vista ejecutiva para priorizar validacion y centralizacion." })
          ] }),
          /* @__PURE__ */ jsx(Building2, { className: "text-[#0069b1]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-72", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(BarChart, { data: chartByCentro, children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "centro", tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsx(YAxis, { tick: { fontSize: 11 }, tickFormatter: (value) => `$${Number(value) / 1e6}M` }),
          /* @__PURE__ */ jsx(Tooltip, { formatter: (value) => money(value) }),
          /* @__PURE__ */ jsx(Bar, { dataKey: "bruto", fill: "#0891b2", radius: [6, 6, 0, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-black", children: "Pipeline abril" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Lectura directa del libro de honorarios." })
          ] }),
          /* @__PURE__ */ jsx(FileSpreadsheet, { className: "text-emerald-600" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-72", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(LineChart, { data: chartPipeline, children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "name", tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsx(YAxis, { tick: { fontSize: 11 } }),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Line, { type: "monotone", dataKey: "value", stroke: "#0f172a", strokeWidth: 3, dot: { r: 5, fill: "#06b6d4" } })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-950 text-white rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsx(ProcessStep, { icon: /* @__PURE__ */ jsx(UserCheck, {}), title: "1. Personal habilitado", text: "La boleta solo avanza si el prestador existe, esta activo y tiene pacto firmado." }),
      /* @__PURE__ */ jsx(ProcessStep, { icon: /* @__PURE__ */ jsx(ReceiptText, {}), title: "2. Match contra boleta", text: "RRHH compara monto calculado por horas/pacientes/mensual contra PDF adjunto." }),
      /* @__PURE__ */ jsx(ProcessStep, { icon: /* @__PURE__ */ jsx(FileCheck2, {}), title: "3. Centralizacion", text: "Contabilidad descarga un archivo con cuenta 6011 y dimensiones Department, Location, Modality y Financial Class." })
    ] }) })
  ] });
};
var MaestroView = ({ honorarios, totalHonorarios, query, setQuery, centroFilter, setCentroFilter, centros, onAdd, onEdit, onDelete, onExport }) => /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
  /* @__PURE__ */ jsx("section", { className: "bg-white border border-slate-200 rounded-xl p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Base de honorarios" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Mantenedor editable de prestadores, tarifas, pacto y dimensiones contables." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxs("label", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            value: query,
            onChange: (event) => setQuery(event.target.value),
            className: "h-11 w-full sm:w-72 rounded-xl border border-slate-200 pl-9 pr-3 text-sm font-semibold outline-none focus:border-[#0069b1]",
            placeholder: "Buscar RUT, nombre, centro"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "relative", children: [
        /* @__PURE__ */ jsx(Filter, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: centroFilter,
            onChange: (event) => setCentroFilter(event.target.value),
            className: "h-11 rounded-xl border border-slate-200 pl-9 pr-8 text-sm font-semibold outline-none focus:border-[#0069b1] bg-white",
            children: centros.map((centro) => /* @__PURE__ */ jsx("option", { children: centro }, centro))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onAdd,
          className: "h-11 rounded-xl bg-[#0069b1] px-4 text-sm font-black text-white hover:bg-[#00558f] inline-flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsx(Plus, { size: 17 }),
            " Agregar"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onExport,
          className: "h-11 rounded-xl border border-slate-200 px-4 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsx(FileSpreadsheet, { size: 17 }),
            " Excel"
          ]
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsx(Metric, { title: "Registros visibles", value: honorarios.length.toString(), icon: /* @__PURE__ */ jsx(Users, {}), accent: "cyan", detail: `de ${totalHonorarios} en la base` }),
    /* @__PURE__ */ jsx(Metric, { title: "Con pacto", value: honorarios.filter((h) => h.pactoFirmado).length.toString(), icon: /* @__PURE__ */ jsx(BadgeCheck, {}), accent: "emerald", detail: "Habilitados para pago" }),
    /* @__PURE__ */ jsx(Metric, { title: "Sin pacto", value: honorarios.filter((h) => !h.pactoFirmado).length.toString(), icon: /* @__PURE__ */ jsx(AlertTriangle, {}), accent: "amber", detail: "Bloquean validacion" }),
    /* @__PURE__ */ jsx(Metric, { title: "Centros", value: new Set(honorarios.map((h) => h.centro)).size.toString(), icon: /* @__PURE__ */ jsx(Building2, {}), accent: "blue", detail: "Con filtro actual" })
  ] }),
  /* @__PURE__ */ jsx("section", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[1180px] text-sm", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Prestador" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Cargo" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Centro / Costo" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Tipo" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-right", children: "Tarifa base" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Pacto" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Dimensiones" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Acciones" })
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-100", children: [
      honorarios.map((h) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/70", children: [
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-black", children: h.nombre }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
            h.rut,
            " \xB7 ",
            h.gerente
          ] })
        ] }),
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: h.cargo }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: h.cargoInforme })
        ] }),
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: h.centro }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: h.centroCosto })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx("span", { className: "rounded-lg bg-slate-100 px-3 py-1 text-xs font-black text-slate-600", children: h.tipoPago }) }),
        /* @__PURE__ */ jsxs("td", { className: "p-4 text-right font-black", children: [
          h.tipoPago === "FIJO" && money(h.valorMensual || 0),
          h.tipoPago === "PACIENTES" && `${money(h.valorPaciente || 0)} / pac.`,
          h.tipoPago === "HORAS" && `${money(h.valorLav || 0)} / h`
        ] }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: h.pactoFirmado ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-700", children: [
          /* @__PURE__ */ jsx(BadgeCheck, { size: 12 }),
          " Firmado"
        ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-[10px] font-black text-orange-700", children: [
          /* @__PURE__ */ jsx(XCircle, { size: 12 }),
          " Falta"
        ] }) }),
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: h.department }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
            h.location,
            " \xB7 ",
            h.modality
          ] })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx(SmallButton, { onClick: () => onEdit(h), icon: /* @__PURE__ */ jsx(Pencil, { size: 14 }), label: "Editar" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => onDelete(h.id),
              className: "h-9 rounded-lg border border-red-200 px-3 text-xs font-black text-red-700 hover:bg-red-600 hover:text-white inline-flex items-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx(Trash2, { size: 14 }),
                " Eliminar"
              ]
            }
          )
        ] }) })
      ] }, h.id)),
      honorarios.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs("td", { colSpan: 8, className: "p-10 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-black text-slate-700", children: "No hay registros para el filtro actual." }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Cambia la busqueda o agrega un nuevo prestador honorario." })
      ] }) })
    ] })
  ] }) }) })
] });
var emptyHonorario = () => ({
  id: `h${Date.now()}`,
  rut: "",
  nombre: "",
  cargo: "Enfermero(a) de Dialisis",
  cargoInforme: "Enfermero(a) de Dialisis",
  centro: "SAN BERNARDO",
  centroCosto: "Facilities Operat./San Bernardo",
  gerente: "Roxana Fuentes",
  tipoPago: "HORAS",
  pactoFirmado: false,
  activo: true,
  valorLav: 1e4,
  valorSabado: 1e4,
  valorFestivo: 10500,
  valorCuartoTurno: 0,
  valorCuartoFestivo: 0,
  valorMensual: 0,
  valorPaciente: 0,
  cuenta: "6011",
  department: "Nursing",
  location: "San Bernardo",
  modality: "Chronic",
  financialClass: "Honorarios"
});
var HonorarioFormModal = ({ honorario, onClose, onSave }) => {
  const [form, setForm] = React.useState(honorario || emptyHonorario());
  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };
  const save = () => {
    if (!form.rut.trim() || !form.nombre.trim() || !form.centro.trim()) {
      alert("Completa al menos RUT, nombre y centro.");
      return;
    }
    onSave({
      ...form,
      rut: form.rut.trim(),
      nombre: form.nombre.trim(),
      cargo: form.cargo.trim(),
      cargoInforme: form.cargoInforme.trim(),
      centro: form.centro.trim().toUpperCase(),
      centroCosto: form.centroCosto.trim(),
      gerente: form.gerente.trim(),
      cuenta: form.cuenta.trim() || "6011",
      department: form.department.trim(),
      location: form.location.trim(),
      modality: form.modality.trim(),
      financialClass: form.financialClass.trim()
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("section", { className: "w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-slate-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-white border-b border-slate-200 p-5 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: honorario ? "Editar honorario" : "Agregar honorario" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Actualiza ficha, tarifa, pacto y dimensiones contables." })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "h-10 w-10 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(XCircle, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsx(TextField, { label: "RUT", value: form.rut, onChange: (value) => update("rut", value), placeholder: "12345678-9" }),
        /* @__PURE__ */ jsx(TextField, { label: "Nombre completo", value: form.nombre, onChange: (value) => update("nombre", value), className: "md:col-span-2" }),
        /* @__PURE__ */ jsx(TextField, { label: "Cargo", value: form.cargo, onChange: (value) => update("cargo", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Cargo informe", value: form.cargoInforme, onChange: (value) => update("cargoInforme", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Gerente operaciones", value: form.gerente, onChange: (value) => update("gerente", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Centro", value: form.centro, onChange: (value) => update("centro", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Centro de costo", value: form.centroCosto, onChange: (value) => update("centroCosto", value), className: "md:col-span-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: "Tipo de pago" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: form.tipoPago,
              onChange: (event) => update("tipoPago", event.target.value),
              className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1] bg-white",
              children: [
                /* @__PURE__ */ jsx("option", { value: "HORAS", children: "HORAS" }),
                /* @__PURE__ */ jsx("option", { value: "FIJO", children: "FIJO" }),
                /* @__PURE__ */ jsx("option", { value: "PACIENTES", children: "PACIENTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: "Pacto firmado" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => update("pactoFirmado", !form.pactoFirmado),
              className: `h-12 w-full rounded-xl border px-4 text-sm font-black inline-flex items-center justify-center gap-2 ${form.pactoFirmado ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-orange-200 bg-orange-50 text-orange-700"}`,
              children: [
                form.pactoFirmado ? /* @__PURE__ */ jsx(BadgeCheck, { size: 16 }) : /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
                form.pactoFirmado ? "Firmado" : "Pendiente"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(NumberField, { label: "Hora LaV", value: form.valorLav || 0, onChange: (value) => update("valorLav", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "Hora sabado", value: form.valorSabado || 0, onChange: (value) => update("valorSabado", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "Hora festivo", value: form.valorFestivo || 0, onChange: (value) => update("valorFestivo", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "4to turno", value: form.valorCuartoTurno || 0, onChange: (value) => update("valorCuartoTurno", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "4to festivo", value: form.valorCuartoFestivo || 0, onChange: (value) => update("valorCuartoFestivo", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "Valor paciente", value: form.valorPaciente || 0, onChange: (value) => update("valorPaciente", value) }),
        /* @__PURE__ */ jsx(NumberField, { label: "Valor mensual", value: form.valorMensual || 0, onChange: (value) => update("valorMensual", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Cuenta", value: form.cuenta, onChange: (value) => update("cuenta", value) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsx(TextField, { label: "Department", value: form.department, onChange: (value) => update("department", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Location", value: form.location, onChange: (value) => update("location", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Modality", value: form.modality, onChange: (value) => update("modality", value) }),
        /* @__PURE__ */ jsx(TextField, { label: "Financial Class", value: form.financialClass, onChange: (value) => update("financialClass", value) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-end gap-3 border-t border-slate-200 pt-5", children: [
        /* @__PURE__ */ jsx("button", { onClick: onClose, className: "h-11 rounded-xl border border-slate-200 px-5 text-sm font-black text-slate-700 hover:bg-slate-50", children: "Cancelar" }),
        /* @__PURE__ */ jsxs("button", { onClick: save, className: "h-11 rounded-xl bg-[#0069b1] px-5 text-sm font-black text-white hover:bg-[#00558f] inline-flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(BadgeCheck, { size: 17 }),
          " Guardar honorario"
        ] })
      ] })
    ] })
  ] }) });
};
var TextField = ({ label, value, onChange, placeholder, className }) => /* @__PURE__ */ jsxs("label", { className: `space-y-2 ${className || ""}`, children: [
  /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: label }),
  /* @__PURE__ */ jsx(
    "input",
    {
      value,
      placeholder,
      onChange: (event) => onChange(event.target.value),
      className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1]"
    }
  )
] });
var NumberField = ({ label, value, onChange }) => /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
  /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: label }),
  /* @__PURE__ */ jsx(
    "input",
    {
      type: "number",
      min: "0",
      step: "1",
      value,
      onChange: (event) => onChange(Number(event.target.value)),
      className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1]"
    }
  )
] });
var CargaView = ({ honorarios, movimientos, draft, setDraft, selectedHonorario, createDraft, cierreBloqueado, onExportReporte }) => {
  const [fromDate, setFromDate] = React.useState("2026-04-01");
  const [toDate, setToDate] = React.useState("2026-04-30");
  const bruto = calculateDraft(selectedHonorario, draft);
  const retencion = selectedHonorario.tipoPago === "FIJO" ? 0 : bruto * 0.1525;
  const reporte = movimientos.filter((m) => m.enfermeraJefe === draft.enfermeraJefe && m.fechaIngreso >= fromDate && m.fechaIngreso <= toDate);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    cierreBloqueado && /* @__PURE__ */ jsx("section", { className: "rounded-xl border border-[#d20f55]/30 bg-[#d20f55]/10 p-4 text-sm font-bold text-[#8a0d39]", children: "El administrador bloqueo el periodo de cierre. Las enfermeras jefe pueden revisar reportes, pero no generar nuevas solicitudes." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("section", { className: "xl:col-span-2 bg-white border border-slate-200 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Carga mensual enfermera jefe" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "La jefatura informa cantidades; el sistema calcula el monto esperado." })
          ] }),
          /* @__PURE__ */ jsx(CalendarDays, { className: "text-[#0069b1]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(TextField, { label: "Enfermera jefe", value: draft.enfermeraJefe, onChange: (value) => setDraft((current) => ({ ...current, enfermeraJefe: value })) }),
          /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: "Fecha ingreso" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                value: draft.fechaIngreso,
                onChange: (event) => setDraft((current) => ({ ...current, fechaIngreso: event.target.value })),
                className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "space-y-2 md:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: "Prestador habilitado" }),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: draft.honorarioId,
                onChange: (event) => setDraft((current) => ({ ...current, honorarioId: event.target.value })),
                className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1] bg-white",
                children: honorarios.map((h) => /* @__PURE__ */ jsxs("option", { value: h.id, children: [
                  h.nombre,
                  " \xB7 ",
                  h.centro,
                  " \xB7 ",
                  h.tipoPago
                ] }, h.id))
              }
            )
          ] }),
          /* @__PURE__ */ jsx(NumberInput, { label: "Horas LaV", value: draft.horasLav, onChange: (value) => setDraft((current) => ({ ...current, horasLav: value })), disabled: selectedHonorario.tipoPago !== "HORAS" }),
          /* @__PURE__ */ jsx(NumberInput, { label: "Horas sabado", value: draft.horasSabado, onChange: (value) => setDraft((current) => ({ ...current, horasSabado: value })), disabled: selectedHonorario.tipoPago !== "HORAS" }),
          /* @__PURE__ */ jsx(NumberInput, { label: "Horas festivo", value: draft.horasFestivo, onChange: (value) => setDraft((current) => ({ ...current, horasFestivo: value })), disabled: selectedHonorario.tipoPago !== "HORAS" }),
          /* @__PURE__ */ jsx(NumberInput, { label: "4to turno", value: draft.cuartoTurno, onChange: (value) => setDraft((current) => ({ ...current, cuartoTurno: value })), disabled: selectedHonorario.tipoPago !== "HORAS" }),
          /* @__PURE__ */ jsx(NumberInput, { label: "4to festivo", value: draft.cuartoFestivo, onChange: (value) => setDraft((current) => ({ ...current, cuartoFestivo: value })), disabled: selectedHonorario.tipoPago !== "HORAS" }),
          /* @__PURE__ */ jsx(NumberInput, { label: "Pacientes", value: draft.pacientes, onChange: (value) => setDraft((current) => ({ ...current, pacientes: value })), disabled: selectedHonorario.tipoPago !== "PACIENTES" }),
          /* @__PURE__ */ jsxs("label", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: "Boleta PDF" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setDraft((current) => ({ ...current, boletaAdjunta: !current.boletaAdjunta, montoBoletaOcr: current.montoBoletaOcr || bruto })),
                className: `h-12 w-full rounded-xl border px-4 text-sm font-black inline-flex items-center justify-center gap-2 ${draft.boletaAdjunta ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`,
                children: [
                  draft.boletaAdjunta ? /* @__PURE__ */ jsx(Paperclip, { size: 16 }) : /* @__PURE__ */ jsx(Hourglass, { size: 16 }),
                  draft.boletaAdjunta ? "Adjunta" : "No adjunta"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            NumberInput,
            {
              label: "Monto OCR boleta",
              value: draft.montoBoletaOcr || bruto,
              onChange: (value) => setDraft((current) => ({ ...current, montoBoletaOcr: value })),
              disabled: !draft.boletaAdjunta
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: createDraft,
              disabled: cierreBloqueado,
              className: "h-12 rounded-xl bg-[#0069b1] px-5 text-sm font-black text-white hover:bg-[#00558f] disabled:bg-slate-300 disabled:text-slate-500 inline-flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsx(ReceiptText, { size: 18 }),
                " Generar solicitud"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("button", { className: "h-12 rounded-xl border border-slate-200 px-5 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(FileSpreadsheet, { size: 18 }),
            " Importar Excel mensual"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "bg-slate-950 text-white rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.24em] text-[#ffc100]", children: "Calculo esperado" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl font-black", children: selectedHonorario.nombre }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-slate-400", children: [
          selectedHonorario.rut,
          " \xB7 ",
          selectedHonorario.centro
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ jsx(AsideAmount, { label: "Bruto esperado", value: money(bruto) }),
          /* @__PURE__ */ jsx(AsideAmount, { label: "Retencion", value: money(retencion) }),
          /* @__PURE__ */ jsx(AsideAmount, { label: "Liquido referencia", value: money(bruto - retencion) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-xl bg-white/5 border border-white/10 p-4", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300", children: "Si la enfermera genera la solicitud sin boleta, el estado queda pendiente de inmediato y el caso se provisiona para centralizacion. Si adjunta PDF, el OCR simulado compara el total contra el bruto esperado." }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Reporte enfermera jefe" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Solicitudes ingresadas por jefatura con filtros de fecha." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx("input", { type: "date", value: fromDate, onChange: (event) => setFromDate(event.target.value), className: "h-11 rounded-xl border border-slate-200 px-3 text-sm font-bold" }),
          /* @__PURE__ */ jsx("input", { type: "date", value: toDate, onChange: (event) => setToDate(event.target.value), className: "h-11 rounded-xl border border-slate-200 px-3 text-sm font-bold" }),
          /* @__PURE__ */ jsxs("button", { onClick: () => onExportReporte(reporte), className: "h-11 rounded-xl border border-slate-200 px-4 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsx(FileSpreadsheet, { size: 17 }),
            " Excel"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[900px] text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Fecha" }),
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Prestador" }),
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Centro" }),
          /* @__PURE__ */ jsx("th", { className: "p-4 text-right", children: "Bruto" }),
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Estado" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-100", children: [
          reporte.map((m) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-bold", children: m.fechaIngreso }),
            /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-black", children: m.honorario.nombre }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: m.honorario.rut })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.centro }),
            /* @__PURE__ */ jsx("td", { className: "p-4 text-right font-black", children: money(m.bruto) }),
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(StatusBadge, { estado: m.estado }) })
          ] }, m.id)),
          reporte.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "p-8 text-center text-sm font-bold text-slate-500", children: "Sin solicitudes para el filtro seleccionado." }) })
        ] })
      ] }) })
    ] })
  ] });
};
var ValidacionView = ({ movimientos, approve, attachBoleta, runOcr, validateSii, onExport }) => /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden", children: [
  /* @__PURE__ */ jsxs("div", { className: "p-5 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Bandeja RRHH" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Match entre horas informadas, pacto firmado y boleta recibida." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
      /* @__PURE__ */ jsxs("button", { onClick: onExport, className: "h-11 rounded-xl border border-slate-200 px-4 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(FileSpreadsheet, { size: 17 }),
        " Excel RRHH"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-50 px-4 py-2 text-xs font-black text-cyan-700", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { size: 16 }),
        " Validacion SII como modulo opcional"
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[1060px] text-sm", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Prestador" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Centro" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-right", children: "Bruto esperado" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-right", children: "Monto boleta" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Pacto" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Estado" }),
      /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Acciones" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100", children: movimientos.map((m) => {
      const match = m.montoBoleta !== void 0 && Math.abs(m.montoBoleta - m.bruto) <= 1;
      return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/70", children: [
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-black", children: m.honorario.nombre }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500", children: [
            m.honorario.rut,
            " \xB7 ",
            m.honorario.cargoInforme
          ] }),
          m.observacion && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-bold text-orange-700", children: m.observacion })
        ] }),
        /* @__PURE__ */ jsxs("td", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: m.honorario.centro }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: m.honorario.centroCosto })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-right font-black", children: money(m.bruto) }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsx("span", { className: `font-black ${match ? "text-emerald-700" : "text-orange-700"}`, children: m.montoBoleta ? money(m.montoBoleta) : "-" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.pactoFirmado ? /* @__PURE__ */ jsx(CheckIcon, { label: "OK" }) : /* @__PURE__ */ jsx(WarnIcon, { label: "Falta" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(StatusBadge, { estado: m.estado }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          !m.boletaPdf && /* @__PURE__ */ jsx(SmallButton, { onClick: () => attachBoleta(m.id), icon: /* @__PURE__ */ jsx(Paperclip, { size: 14 }), label: "Adjuntar" }),
          /* @__PURE__ */ jsx(SmallButton, { onClick: () => runOcr(m.id), icon: /* @__PURE__ */ jsx(ReceiptText, { size: 14 }), label: "OCR OK" }),
          /* @__PURE__ */ jsx(SmallButton, { onClick: () => runOcr(m.id, true), icon: /* @__PURE__ */ jsx(AlertTriangle, { size: 14 }), label: "OCR alerta" }),
          /* @__PURE__ */ jsx(SmallButton, { onClick: () => approve(m.id), icon: /* @__PURE__ */ jsx(ClipboardCheck, { size: 14 }), label: "Validar" }),
          m.estado === "APROBADA_RRHH" && /* @__PURE__ */ jsx(SmallButton, { onClick: () => validateSii(m.id), icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 14 }), label: "SII" })
        ] }) })
      ] }, m.id);
    }) })
  ] }) })
] });
var ContabilidadView = ({ movimientos, centralize, onExport }) => {
  const payable = movimientos.filter((m) => ["APROBADA_RRHH", "VALIDADA_SII"].includes(m.estado));
  const provisionados = movimientos.filter((m) => ["PENDIENTE_BOLETA", "OBSERVADA_RRHH"].includes(m.estado) || m.provisionado);
  const total = payable.reduce((acc, m) => acc + m.bruto, 0);
  const provisionTotal = provisionados.reduce((acc, m) => acc + m.bruto, 0);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Centralizacion contable" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Archivo de salida para carga contable sin digitacion manual." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: onExport,
            className: "h-12 rounded-xl border border-slate-200 px-5 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsx(FileSpreadsheet, { size: 18 }),
              " Exportar lote"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: centralize,
            className: "h-12 rounded-xl bg-slate-950 px-5 text-sm font-black text-white hover:bg-slate-800 inline-flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Download, { size: 18 }),
              " Generar lote abril (",
              payable.length,
              ")"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsx(Metric, { title: "Registros lote", value: payable.length.toString(), icon: /* @__PURE__ */ jsx(FileText, {}), accent: "blue", detail: "Aprobadas o SII" }),
      /* @__PURE__ */ jsx(Metric, { title: "Monto lote", value: money(total), icon: /* @__PURE__ */ jsx(Wallet, {}), accent: "emerald", detail: "Bruto a centralizar" }),
      /* @__PURE__ */ jsx(Metric, { title: "Provisionados", value: money(provisionTotal), icon: /* @__PURE__ */ jsx(Hourglass, {}), accent: "amber", detail: `${provisionados.length} pendientes/observados` })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[980px] text-sm", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Folio" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "RUT" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Centro costo" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Department" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Location" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Modality" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-right", children: "Bruto" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Tratamiento" }),
        /* @__PURE__ */ jsx("th", { className: "p-4 text-left", children: "Estado" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100", children: movimientos.map((m) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "p-4 font-black", children: m.folio || "-" }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.rut }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.centroCosto }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.department }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.location }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: m.honorario.modality }),
        /* @__PURE__ */ jsx("td", { className: "p-4 text-right font-black", children: money(m.bruto) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: ["PENDIENTE_BOLETA", "OBSERVADA_RRHH"].includes(m.estado) || m.provisionado ? /* @__PURE__ */ jsx("span", { className: "rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-black text-amber-700", children: "Provisionado" }) : /* @__PURE__ */ jsx("span", { className: "rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-black text-emerald-700", children: "Pago" }) }),
        /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(StatusBadge, { estado: m.estado }) })
      ] }, m.id)) })
    ] }) }) })
  ] });
};
var TrazabilidadView = ({ movimientos, onExport }) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
  /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-black", children: "Trazabilidad operacional" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Exporta el recorrido completo de cada solicitud." })
    ] }),
    /* @__PURE__ */ jsxs("button", { onClick: onExport, className: "h-11 rounded-xl border border-slate-200 px-4 text-sm font-black text-slate-700 hover:bg-slate-50 inline-flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx(FileSpreadsheet, { size: 17 }),
      " Excel trazabilidad"
    ] })
  ] }),
  movimientos.map((m) => /* @__PURE__ */ jsxs("section", { className: "bg-white border border-slate-200 rounded-xl p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-black", children: m.honorario.nombre }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500", children: [
          m.honorario.centro,
          " \xB7 ",
          money(m.bruto)
        ] })
      ] }),
      /* @__PURE__ */ jsx(StatusBadge, { estado: m.estado })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-1 md:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsx(TraceStep, { done: true, label: "Base", icon: /* @__PURE__ */ jsx(Database, { size: 15 }) }),
      /* @__PURE__ */ jsx(TraceStep, { done: m.honorario.pactoFirmado, label: "Pacto", icon: /* @__PURE__ */ jsx(FileCheck2, { size: 15 }) }),
      /* @__PURE__ */ jsx(TraceStep, { done: m.boletaPdf, label: "Boleta PDF", icon: /* @__PURE__ */ jsx(Paperclip, { size: 15 }) }),
      /* @__PURE__ */ jsx(TraceStep, { done: ["APROBADA_RRHH", "VALIDADA_SII", "CENTRALIZADA"].includes(m.estado), label: "RRHH", icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 15 }) }),
      /* @__PURE__ */ jsx(TraceStep, { done: m.estado === "CENTRALIZADA", label: "Centralizada", icon: /* @__PURE__ */ jsx(Landmark, { size: 15 }) })
    ] })
  ] }, m.id))
] });
var Metric = ({ title, value, icon, accent, detail }) => {
  const colors = {
    cyan: "bg-blue-50 text-[#0069b1]",
    emerald: "bg-lime-50 text-[#779f09]",
    blue: "bg-indigo-50 text-[#283764]",
    amber: "bg-amber-50 text-[#ee8000]",
    slate: "bg-slate-100 text-slate-700"
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: title }),
      /* @__PURE__ */ jsx("div", { className: `h-10 w-10 rounded-xl flex items-center justify-center ${colors[accent]}`, children: icon })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-2xl font-black tracking-tight", children: value }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-bold text-slate-400", children: detail })
  ] });
};
var ProcessStep = ({ icon, title, text }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
  /* @__PURE__ */ jsx("div", { className: "h-11 w-11 shrink-0 rounded-xl bg-[#ffc100] text-[#283764] flex items-center justify-center", children: icon }),
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "font-black", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-400", children: text })
  ] })
] });
var NumberInput = ({ label, value, onChange, disabled }) => /* @__PURE__ */ jsxs("label", { className: `space-y-2 ${disabled ? "opacity-45" : ""}`, children: [
  /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-slate-500", children: label }),
  /* @__PURE__ */ jsx(
    "input",
    {
      type: "number",
      min: "0",
      step: "0.01",
      value,
      disabled,
      onChange: (event) => onChange(Number(event.target.value)),
      className: "h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-bold outline-none focus:border-[#0069b1] disabled:bg-slate-50"
    }
  )
] });
var AsideAmount = ({ label, value }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-3", children: [
  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400", children: label }),
  /* @__PURE__ */ jsx("span", { className: "text-lg font-black", children: value })
] });
var StatusBadge = ({ estado }) => {
  const config = estadoLabel[estado];
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-black ${config.className}`, children: [
    config.icon,
    config.label
  ] });
};
var SmallButton = ({ onClick, icon, label }) => /* @__PURE__ */ jsxs(
  "button",
  {
    onClick,
    className: "h-9 rounded-lg border border-slate-200 px-3 text-xs font-black text-slate-700 hover:bg-slate-950 hover:text-white inline-flex items-center gap-1.5",
    children: [
      icon,
      label
    ]
  }
);
var CheckIcon = ({ label }) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-black text-emerald-700", children: [
  /* @__PURE__ */ jsx(CheckCircle2, { size: 12 }),
  " ",
  label
] });
var WarnIcon = ({ label }) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-[11px] font-black text-orange-700", children: [
  /* @__PURE__ */ jsx(AlertTriangle, { size: 12 }),
  " ",
  label
] });
var TraceStep = ({ done, label, icon }) => /* @__PURE__ */ jsxs("div", { className: `rounded-xl border p-3 ${done ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-50 text-slate-400"}`, children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    icon,
    /* @__PURE__ */ jsx("span", { className: "text-xs font-black", children: label })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "mt-3 h-1.5 rounded-full bg-white overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: `h-full rounded-full ${done ? "w-full bg-emerald-500" : "w-1/3 bg-slate-300"}` }) })
] });
var DavitaDemo_default = DavitaDemo;

// App.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var App = () => /* @__PURE__ */ jsx2(DavitaDemo_default, {});
var App_default = App;

// components/ErrorBoundary.tsx
import { Component } from "react";
import { ShieldAlert, RefreshCcw } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: false,
      error: null
    };
    this.handleReset = () => {
      this.setState({ hasError: false, error: null });
      window.location.reload();
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxs2("div", { className: "min-h-[400px] flex flex-col items-center justify-center p-8 bg-white rounded-3xl border-2 border-dashed border-red-100 shadow-sm transition-all animate-in fade-in zoom-in duration-300", children: [
        /* @__PURE__ */ jsx3("div", { className: "w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6 animate-pulse", children: /* @__PURE__ */ jsx3(ShieldAlert, { size: 40 }) }),
        /* @__PURE__ */ jsx3("h2", { className: "text-2xl font-black text-slate-900 mb-2 text-center tracking-tight", children: "Vaya, algo sali\xF3 mal" }),
        /* @__PURE__ */ jsx3("p", { className: "text-slate-500 text-sm mb-8 text-center max-w-md font-['Inter'] leading-relaxed", children: "Se ha producido un error inesperado al cargar este componente. Nuestro equipo ha sido notificado y estamos trabajando para resolverlo." }),
        /* @__PURE__ */ jsxs2("div", { className: "bg-slate-50 p-4 rounded-2xl mb-8 w-full max-w-xl overflow-hidden", children: [
          /* @__PURE__ */ jsx3("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2", children: "Detalle t\xE9cnico" }),
          /* @__PURE__ */ jsxs2("div", { className: "font-mono text-[11px] text-red-600 break-all bg-red-50/50 p-3 rounded-lg border border-red-100/50 max-h-32 overflow-y-auto", children: [
            this.state.error?.message || "Error desconocido",
            this.state.error?.stack && /* @__PURE__ */ jsx3("div", { className: "mt-2 text-[10px] text-slate-400 font-sans", children: this.state.error.stack.split("\n").slice(0, 3).join("\n") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs2(
          "button",
          {
            onClick: this.handleReset,
            className: "flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-xl shadow-slate-200 group",
            children: [
              /* @__PURE__ */ jsx3(RefreshCcw, { size: 16, className: "group-hover:rotate-180 transition-transform duration-700" }),
              "Recargar Aplicaci\xF3n"
            ]
          }
        )
      ] });
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

// index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx4(React3.StrictMode, { children: /* @__PURE__ */ jsx4(ErrorBoundary_default, { children: /* @__PURE__ */ jsx4(App_default, {}) }) })
);
