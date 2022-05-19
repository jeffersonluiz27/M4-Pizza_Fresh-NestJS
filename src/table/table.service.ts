import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  findAll(): Table[] {
    return this.tables;
  }

  create(createTableDto: CreateTableDto): Table {
    const table: Table = { id: 'id_aleatorio', ...createTableDto };
    this.tables.push(table);
    return table;
  }
}
