import { Model } from 'objection';
import VolunteerModel from './volunteer.model';

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
  volunteer: VolunteerModel;

  static get relationMappings() {
    const VolunteerModel = require('./volunteer.model');

    return {
      volunteer: {
        relation: Model.BelongsToOneRelation,
        modelClass: VolunteerModel,
        join: {
          from: 'forms.volunteerId',
          to: 'volunteers.id',
        },
      },
    };
  }
}

module.exports = Form;
export default Form;
