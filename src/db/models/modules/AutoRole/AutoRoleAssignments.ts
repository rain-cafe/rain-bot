import {Table, Column, Model, BelongsTo, PrimaryKey, DataType, ForeignKey, AutoIncrement} from 'sequelize-typescript';
import {Guild} from '../../Guild/Guild';
import {AutoRoleConfig} from './AutoRoleConfig';

@Table
export class AutoRoleAssignments extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.BIGINT)
    id!: number;

    @ForeignKey(() => Guild)
    @ForeignKey(() => AutoRoleConfig)
    @Column(DataType.TEXT)
    guildId!: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
   })
    enabled!: boolean;

    @Column(DataType.ARRAY(DataType.TEXT))
    validationRoles?: string[];

    @Column(DataType.ARRAY(DataType.TEXT))
    trueRoles?: string[];

    @Column(DataType.ARRAY(DataType.TEXT))
    falseRoles?: string[];

    @BelongsTo(() => Guild)
    guild!: Guild;
    
    @BelongsTo(() => AutoRoleConfig)
    autoRoleConfig!: AutoRoleConfig;

    get disabled() {
        return !this.enabled;
   }
}
