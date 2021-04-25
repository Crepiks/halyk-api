import { Model } from 'objection';

class Form extends Model {
  static tableName = 'forms';

  id: number;
  fullName: string;
  phone: string;
  address: string;
  age: number;
  maritalStatus: string;
  childrenNumber: number;
  kept: string;
  housing: string;
  ocupation: string;
  help: string;
  helpAbsenceReason: string;
  problems: string;
  canLearn: boolean;
  volunteerId: number;
  createdAt: string;
}

module.exports = Form;
export default Form;
