import { Model } from 'objection';
import FormModel from './form.model';

class VolunteerModel extends Model {
  static tableName = 'volunteers';

  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  createdAt: string;
  forms: FormModel[];

  static get relationMappings() {
    const FormModel = require('./form.model');

    return {
      forms: {
        relation: Model.HasManyRelation,
        modelClass: FormModel,
        join: {
          from: 'volunteers.id',
          to: 'forms.volunteerId',
        },
      },
    };
  }
}

module.exports = VolunteerModel;
export default VolunteerModel;
