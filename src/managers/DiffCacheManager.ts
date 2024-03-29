import {GuildMember, PartialGuildMember} from 'discord.js';
import {RoleDiff} from '../utils/role-diff';

export class DiffCacheManager {
    private static diffs: {
        [key: string]: RoleDiff;
   } = {};

    public static diff(member: GuildMember|PartialGuildMember): RoleDiff {
        if (!DiffCacheManager.diffs[member.id]) {
            DiffCacheManager.diffs[member.id] = new RoleDiff(member.roles.cache.filter((role) => role.name !== '@everyone').map((role) => role.id));
       }

        return DiffCacheManager.diffs[member.id];
   }

    public static async commit(member: GuildMember|PartialGuildMember) {
        const diff = DiffCacheManager.diff(member);

        if (!diff || !diff.hasChanged) return;

        await diff.commit(member);

        delete DiffCacheManager.diffs[member.id];
   }
}