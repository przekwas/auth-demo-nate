import { Query } from '../index';
import { TUsers } from '../models';

const find = (column: string, value: string | number) => Query<TUsers[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

export default {
    find
}