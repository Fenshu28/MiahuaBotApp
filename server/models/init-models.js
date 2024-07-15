var DataTypes = require("sequelize").DataTypes;
var _Actividades = require("./Actividades");
var _Alumnos = require("./Alumnos");
var _Archivos = require("./Archivos");
var _Horarios = require("./Horarios");
var _Instructores = require("./Instructores");
var _Kits = require("./Kits");
var _Manuales = require("./Manuales");
var _Pagos = require("./Pagos");
var _Planes = require("./Planes");
var _Proyectos = require("./Proyectos");
var _asistencias = require("./asistencias");
var _avances = require("./avances");
var _trabajanEn = require("./trabajanEn");

function initModels(sequelize) {
  var Actividades = _Actividades(sequelize, DataTypes);
  var Alumnos = _Alumnos(sequelize, DataTypes);
  var Archivos = _Archivos(sequelize, DataTypes);
  var Horarios = _Horarios(sequelize, DataTypes);
  var Instructores = _Instructores(sequelize, DataTypes);
  var Kits = _Kits(sequelize, DataTypes);
  var Manuales = _Manuales(sequelize, DataTypes);
  var Pagos = _Pagos(sequelize, DataTypes);
  var Planes = _Planes(sequelize, DataTypes);
  var Proyectos = _Proyectos(sequelize, DataTypes);
  var asistencias = _asistencias(sequelize, DataTypes);
  var avances = _avances(sequelize, DataTypes);
  var trabajanEn = _trabajanEn(sequelize, DataTypes);

  Alumnos.belongsToMany(Horarios, { as: 'idHorario_Horarios', through: asistencias, foreignKey: "matricula", otherKey: "idHorario" });
  Horarios.belongsToMany(Alumnos, { as: 'matricula_Alumnos', through: asistencias, foreignKey: "idHorario", otherKey: "matricula" });
  Horarios.belongsToMany(Instructores, { as: 'idInstructor_Instructores', through: trabajanEn, foreignKey: "idHorario", otherKey: "idInstructor" });
  Instructores.belongsToMany(Horarios, { as: 'idHorario_Horarios_trabajanEns', through: trabajanEn, foreignKey: "idInstructor", otherKey: "idHorario" });
  avances.belongsTo(Actividades, { as: "idActividad_Actividade", foreignKey: "idActividad"});
  Actividades.hasMany(avances, { as: "avances", foreignKey: "idActividad"});
  Pagos.belongsTo(Alumnos, { as: "matricula_Alumno", foreignKey: "matricula"});
  Alumnos.hasMany(Pagos, { as: "Pagos", foreignKey: "matricula"});
  asistencias.belongsTo(Alumnos, { as: "matricula_Alumno", foreignKey: "matricula"});
  Alumnos.hasMany(asistencias, { as: "asistencia", foreignKey: "matricula"});
  avances.belongsTo(Alumnos, { as: "matricula_Alumno", foreignKey: "matricula"});
  Alumnos.hasMany(avances, { as: "avances", foreignKey: "matricula"});
  asistencias.belongsTo(Horarios, { as: "idHorario_Horario", foreignKey: "idHorario"});
  Horarios.hasMany(asistencias, { as: "asistencia", foreignKey: "idHorario"});
  trabajanEn.belongsTo(Horarios, { as: "idHorario_Horario", foreignKey: "idHorario"});
  Horarios.hasMany(trabajanEn, { as: "trabajanEns", foreignKey: "idHorario"});
  trabajanEn.belongsTo(Instructores, { as: "idInstructor_Instructore", foreignKey: "idInstructor"});
  Instructores.hasMany(trabajanEn, { as: "trabajanEns", foreignKey: "idInstructor"});
  Manuales.belongsTo(Kits, { as: "idKit_Kit", foreignKey: "idKit"});
  Kits.hasMany(Manuales, { as: "Manuales", foreignKey: "idKit"});
  Proyectos.belongsTo(Kits, { as: "idKit_Kit", foreignKey: "idKit"});
  Kits.hasMany(Proyectos, { as: "Proyectos", foreignKey: "idKit"});
  Alumnos.belongsTo(Planes, { as: "idPlan_Plane", foreignKey: "idPlan"});
  Planes.hasMany(Alumnos, { as: "Alumnos", foreignKey: "idPlan"});
  Horarios.belongsTo(Planes, { as: "idPlan_Plane", foreignKey: "idPlan"});
  Planes.hasMany(Horarios, { as: "Horarios", foreignKey: "idPlan"});
  Pagos.belongsTo(Planes, { as: "idPlan_Plane", foreignKey: "idPlan"});
  Planes.hasMany(Pagos, { as: "Pagos", foreignKey: "idPlan"});
  Actividades.belongsTo(Proyectos, { as: "idProyecto_Proyecto", foreignKey: "idProyecto"});
  Proyectos.hasMany(Actividades, { as: "Actividades", foreignKey: "idProyecto"});
  Archivos.belongsTo(avances, { as: "idAvance_avance", foreignKey: "idAvance"});
  avances.hasMany(Archivos, { as: "Archivos", foreignKey: "idAvance"});

  return {
    Actividades,
    Alumnos,
    Archivos,
    Horarios,
    Instructores,
    Kits,
    Manuales,
    Pagos,
    Planes,
    Proyectos,
    asistencias,
    avances,
    trabajanEn,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
