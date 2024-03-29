import {Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, AutoIncrement, HasMany} from 'sequelize-typescript';
import {GuildMessageEmbedFieldTemplate} from './GuildMessageEmbedFieldTemplate';
import {GuildMessageTemplate} from './GuildMessageTemplate';

@Table
export class GuildMessageEmbedTemplate extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.BIGINT)
    id!: number;

    @ForeignKey(() => GuildMessageTemplate)
    @Column(DataType.BIGINT)
    templateId!: number;
    
    @Column(DataType.STRING(200))
    title?: string;

    @Column(DataType.STRING(2000))
    description?: string;

    @Column(DataType.STRING(200))
    url?: string;

    @Column(DataType.STRING(6))
    color?: string;

    @HasMany(() => GuildMessageEmbedFieldTemplate)
    fields?: GuildMessageEmbedFieldTemplate[];

    @BelongsTo(() => GuildMessageTemplate)
    messageTemplate!: GuildMessageTemplate;
}