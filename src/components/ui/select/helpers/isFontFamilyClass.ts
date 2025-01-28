import type { FontFamiliesClasses } from "../../../../utils/data/articleProps";
import { fontFamilyClasses } from "../../../../utils/data/articleProps";

export function isFontFamilyClass(
	family?: string | FontFamiliesClasses
): family is FontFamiliesClasses {
	return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
