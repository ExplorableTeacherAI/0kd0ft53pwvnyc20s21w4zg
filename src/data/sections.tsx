import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

/**
 * ------------------------------------------------------------------
 * SECTION CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using the <Section> component.
 * 2. Use Layout components to organize your sections.
 * 3. Add your sections to the `sections` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-SECTION VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across sections using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts
 * 
 * USAGE IN SECTIONS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. FullWidthLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <FullWidthLayout maxWidth="xl">
 *          <Section id="intro">...</Section>
 *      </FullWidthLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Section id="left">...</Section>
 *          <Section id="right">...</Section>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Section id="item-1">...</Section>
 *          <Section id="item-2">...</Section>
 *          <Section id="item-3">...</Section>
 *      </GridLayout>
 * 
 * 4. SidebarLayout
 *    - Best for: Main content with a sticky sidebar (glossary, controls).
 *    - Usage:
 *      <SidebarLayout sidebarPosition="left" sidebarWidth="medium">
 *          <Sidebar><Section id="sidebar">...</Section></Sidebar>
 *          <Main><Section id="main">...</Section></Main>
 *      </SidebarLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleSections.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const sections: ReactElement[] = [
    <FullWidthLayout key="section-1769970212837" maxWidth="xl">
        <Section id="section-1769970212837">
            <p>test</p>
        </Section>
    </FullWidthLayout>,
];
