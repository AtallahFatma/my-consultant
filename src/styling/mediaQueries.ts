import { css, ThemedCssFunction, DefaultTheme } from "styled-components";
import { sizes } from "../utils/mediaQueries.utils";

/* :::::::::::::::::::::::::::: media queries conditions */
const MEDIA_QUERIES_RULE_MAX = 0;
const MEDIA_QUERIES_RULE_MIN = 1;
const MEDIA_QUERIES_RULE_ONLY = 3;

/* :::::::::::::::::::::::::::: EM */
const EM_DIVISOR = 16;
const EM_UNIT = "em";

const convertPxToEm = (pxValue: number): number => pxValue / EM_DIVISOR;

const generateMediaQueriesRules = (
  mediaQueriesRuleType: number,
  minSize: number,
  maxSize: number,
  unit: string
): string => {
  switch (mediaQueriesRuleType) {
    case MEDIA_QUERIES_RULE_MAX:
      return `(max-width: ${maxSize}${unit})`;
    case MEDIA_QUERIES_RULE_ONLY:
      return `(min-width: ${minSize}${unit}) and (max-width: ${maxSize}${unit})`;
    case MEDIA_QUERIES_RULE_MIN:
    default:
      return `(min-width: ${minSize}${unit})`;
  }
};

/* todo : nice to have : media custom */
interface MediaType<T> {
  sm: ThemedCssFunction<DefaultTheme & T>;
  lg: ThemedCssFunction<DefaultTheme & T>;
  md: ThemedCssFunction<DefaultTheme & T>;
  xs: ThemedCssFunction<DefaultTheme & T>;
  xl: ThemedCssFunction<DefaultTheme & T>;
}

const media = <T>(mediaQueriesRuleType: number): MediaType<T> =>
  Object.keys(sizes).reduce((accumulator: MediaType<T>, label: string) => {
    const minSize = convertPxToEm(sizes[label].min);
    const maxSize = convertPxToEm(sizes[label].max);
    accumulator[label] = (literals: TemplateStringsArray, ...args: any[]) => {
      return css`
        @media ${generateMediaQueriesRules(
            mediaQueriesRuleType,
            minSize,
            maxSize,
            EM_UNIT
          )} {
          ${css(literals, ...args)};
        }
      `;
    };

    return accumulator;
  }, {} as MediaType<T>);

export const applyStyleFrom = <T>(): MediaType<T> =>
  media(MEDIA_QUERIES_RULE_MIN);

export const applyStyleUntil = <T>(): MediaType<T> =>
  media(MEDIA_QUERIES_RULE_MAX);

export const applyStyleOnlyFor = <T>(): MediaType<T> =>
  media(MEDIA_QUERIES_RULE_ONLY);
