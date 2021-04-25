import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('forms', (table) => {
    table.increments('id');
    table.string('fullName', 512).notNullable();
    table.string('phone', 10).nullable();
    table.string('address', 255).nullable();
    table.integer('age').unsigned().nullable();
    table.string('maritalStatus', 255).nullable();
    table.integer('childrenNumber').unsigned().notNullable().defaultTo(0);
    table.text('kept').nullable().defaultTo(null);
    table.string('housing', 255).nullable();
    table.string('ocupation', 512).nullable();
    table.text('help').nullable();
    table.text('helpAbsenceReason').nullable();
    table.string('problems').nullable();
    table.boolean('canLearn').nullable().defaultTo(false);
    table.integer('volunteerId').unsigned().nullable();
    table
      .foreign('volunteerId')
      .references('volunteers.id')
      .onDelete('SET NULL');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('forms');
}
