import Dashboard from "../src/views/Dashboard.js";
import Upgrade from "../src/views/Upgrade.js";
import Login from "../src/views/Login.js";
import UsuarioMaster from "../src/views/UsuarioMaster.js";
import ListaUsuarios from "./views/ListaUsuarios.js";
import ListaTarefas from "./views/ListaTarefas.js";
import ListaTarefasGerente from "./views/ListaTarefas_gerente.js";
import ListaTarefasGerenteAvaliacao from "./views/ListaTarefas_gerente_avaliacao.js";
/*import UserProfile from "views/UserProfile.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
*/
const dashboardRoutes = [
    {
      path: "/",
      name: "Login",
      icon: "nc-icon nc-chart-pie-35",
      component: Login,
      layout: "/home"
    },
    {
      path: "/Admin/listaUsuarios",
      name: "Admin - Lista de Usuarios",
      icon: "nc-icon nc-notes",
      component: ListaUsuarios,
      layout: "/admin"
    },
    {
      path: "/Admin/listaTarefas",
      name: "Admin - Lista de Tarefas",
      icon: "nc-icon nc-notes",
      component: ListaTarefas,
      layout: "/admin"
    },
    {
      path: "/master/listaTarefas_gerente",
      name: "Gerente - Lista de Tarefas",
      icon: "nc-icon nc-notes",
      component: ListaTarefasGerente,
      layout: "/admin"
    },
    {
      path: "/master/listaTarefas_gerente_avaliacao",
      name: "Gerente - Lista de Tarefas_avaliacao",
      icon: "nc-icon nc-notes",
      component: ListaTarefasGerenteAvaliacao,
      layout: "/admin"
    }

      
      /*
      {
      path: "/master/tasks",
      name: "Usuario Master",
      icon: "nc-icon nc-notes",
      component: UsuarioMaster,
      layout: "/admin"
    },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-pie-35",
      component: Dashboard,
      layout: "/admin"
    }
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
