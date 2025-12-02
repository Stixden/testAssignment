/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { test } from "@playwright/test";

/**
 * Decorator that wraps a function with a Playwright test step.
 * Used for reporting purposes.
 *
 * @example
 ```
    import { step } from './step_decorator';
    class MyTestClass {
        @step('optional step name')
        async myTestFunction() {
            // Test code goes here
        }
    }
 ```
 */

export function step<This, Args extends any[], Return>(message?: string) {
  return function actualDecorator(
    target: (this: This, ...args: Args) => Promise<Return>,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Promise<Return>>
  ) {
    function replacementMethod(this: any, ...args: Args) {
      const name = message ?? `${this.constructor.name}.${context.name as string}`;

      return test.step(name, async () => target.call(this, ...args), {
        box: true,
      });
    }

    return replacementMethod;
  };
}

/**
 * Method that combines multiple steps into a single step.
 * Used for reporting purposes.
 *
 * @example
 * await combineSteps('Check multiple steps', async () => {
 *   await page.open(...);
 *   await page.expectLoaded(...);
 *   await page.click(...);
 * });
 */
