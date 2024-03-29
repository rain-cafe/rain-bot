import {Table, Column, Model, BelongsTo, PrimaryKey, DataType, ForeignKey} from 'sequelize-typescript';
import {Guild} from '../Guild/Guild';

@Table
export class DalamudConfig extends Model {
    @PrimaryKey
    @ForeignKey(() => Guild)
    @Column(DataType.TEXT)
    guildId!: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
   })
    enabled!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
   })
    autoPromotion!: boolean;

    @BelongsTo(() => Guild)
    guild!: Guild;

    get disabled() {
        return !this.enabled;
   }
}
