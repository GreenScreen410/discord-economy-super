import EconomyOptions from '../interfaces/EconomyOptions'

/**
* Cooldown manager methods object.
*/
declare class CooldownManager {
   public constructor(options: EconomyOptions)

   /**
   * Clears user's daily cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<boolean>} If cleared: true; else: false
   */
   public clearDaily(memberID: string, guildID: string): Promise<boolean>

   /**
   * Clears user's work cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<boolean>} If cleared: true; else: false
   */
   public clearWork(memberID: string, guildID: string): Promise<boolean>

   /**
   * Clears user's weekly cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<boolean>} If cleared: true; else: false
   */
   public clearWeekly(memberID: string, guildID: string): Promise<boolean>

   /**
   * Gets user's daily cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<number>} Cooldown end timestamp
   */
   public getDaily(memberID: string, guildID: string): Promise<number>

   /**
   * Gets user's work cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<number>} Cooldown end timestamp
   */
   public getWork(memberID: string, guildID: string): Promise<number>

   /**
   * Gets user's weekly cooldown
   * @param {string} memberID Member ID
   * @param {string} guildID Guild ID
   * @returns {Promise<number>} Cooldown end timestamp
   */
   public getWeekly(memberID: string, guildID: string): Promise<number>
}

export = CooldownManager