import { Sequelize } from 'sequelize';

const db = new Sequelize('flaisgr1_miahuabot','flaisgr1_tecMB','M14HU4B07?2024',{
    host:'216.246.46.130',
    dialect: 'mysql'
})

export default db

//private final String base = "flaisgr1_test_magicoffe";
  //  private final String ip = "216.246.46.130";
    //private final String puerto = "3306";
   // private final String usuario = "flaisgr1_tecnico";
    //private final String contra = "M14HU4B07?2024";