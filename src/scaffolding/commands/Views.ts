// eslint-disable-next-line import/no-extraneous-dependencies
import { BaseCommand, Arg, RunnableArgs, renderTemplate } from 'angel-manager';

export default class Components extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public commandName = 'make:view';

  /**
   * Description of the command
   */
  public description = 'Makes a new View';

  /**
   * Liquid template path
   */
  public templatePath = 'views';

  /**
   * Processed template destination path
   */
  public destinationPath = 'views';

  /**
   * The extension of the component
   */
  public extension = 'tsx';

  /**
   * If true, the template will be generated inside componentName directory
   */
  public subDir = true;

  /**
   *
   * @returns an array of Arguments representing the arguments
   * to be passed to the command in the order they are defined
   */
  public args(): Arg[] {
    return [{ name: 'viewName', type: 'string' }];
  }

  public async run(args: RunnableArgs): Promise<void> {
    // const manager = new Angel(this, args);
    try {
      // manager.renderTemplate();
      // manager.includeRelated('css')
      await renderTemplate(this, args);
    } catch (error) {
      console.error();
    }
  }
}
