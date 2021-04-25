import { Model } from 'objection';

class VolunteerModel extends Model {
  static tableName = 'volunteers';

  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  createdAt: string;
}

module.exports = VolunteerModel;
export default VolunteerModel;
