/* Developed by FireSeed - Fueling Innovation */
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DocsLayout } from './layouts/DocsLayout';

// Primeros Pasos
import { OverviewDocs } from './docs/OverviewDocs';
import { InstallationDocs } from './docs/InstallationDocs';
import { UsageDocs } from './docs/UsageDocs';
import { ThemeDocs } from './docs/ThemeDocs';

// Átomos
import { ButtonDocs } from './docs/ButtonDocs';
import { BadgeDocs } from './docs/BadgeDocs';
import { InputFieldDocs } from './docs/InputFieldDocs';
import { SelectFieldDocs } from './docs/SelectFieldDocs';
import { SkeletonDocs } from './docs/SkeletonDocs';
import { SwitchDocs } from './docs/SwitchDocs';
import { InlineCodeDocs } from './docs/InlineCodeDocs';
import { StepBadgeDocs } from './docs/StepBadgeDocs';

// Moléculas
import { FeedbackButtonDocs } from './docs/FeedbackButtonDocs';
import { ModalDocs } from './docs/ModalDocs';
import { ConfirmModalDocs } from './docs/ConfirmModalDocs';
import { MultiSelectDocs } from './docs/MultiSelectDocs';
import { TabsDocs } from './docs/TabsDocs';
import { PasswordRequirementsDocs } from './docs/PasswordRequirementsDocs';
import { StarRatingDocs } from './docs/StarRatingDocs';
import { AccordionDocs } from './docs/AccordionDocs';
import { StatCardDocs } from './docs/StatCardDocs';
import { EmptyStateDocs } from './docs/EmptyStateDocs';
import { CalendarDocs } from './docs/CalendarDocs';

// Organismos
import { CardDocs } from './docs/CardDocs';
import { CalloutDocs } from './docs/CalloutDocs';
import { SidebarDocs } from './docs/SidebarDocs';
import { AnimateInDocs } from './docs/AnimateInDocs';
import { CodeBlockDocs } from './docs/CodeBlockDocs';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirigir la raíz a la Introducción General */}
        <Route path="/" element={<Navigate to="/docs/overview" replace />} />

        {/* Layout central de Documentación */}
        <Route
          path="/docs/*"
          element={
            <DocsLayout>
              <Routes>
                {/* Primeros Pasos */}
                <Route path="overview" element={<OverviewDocs />} />
                <Route path="installation" element={<InstallationDocs />} />
                <Route path="usage" element={<UsageDocs />} />
                <Route path="theme" element={<ThemeDocs />} />

                {/* Átomos */}
                <Route path="button" element={<ButtonDocs />} />
                <Route path="badge" element={<BadgeDocs />} />
                <Route path="input-field" element={<InputFieldDocs />} />
                <Route path="select-field" element={<SelectFieldDocs />} />
                <Route path="skeleton" element={<SkeletonDocs />} />
                <Route path="switch" element={<SwitchDocs />} />
                <Route path="inline-code" element={<InlineCodeDocs />} />
                <Route path="step-badge" element={<StepBadgeDocs />} />

                {/* Moléculas */}
                <Route path="feedback-button" element={<FeedbackButtonDocs />} />
                <Route path="modal" element={<ModalDocs />} />
                <Route path="confirm-modal" element={<ConfirmModalDocs />} />
                <Route path="multiselect" element={<MultiSelectDocs />} />
                <Route path="tabs" element={<TabsDocs />} />
                <Route path="password-requirements" element={<PasswordRequirementsDocs />} />
                <Route path="star-rating" element={<StarRatingDocs />} />
                <Route path="accordion" element={<AccordionDocs />} />
                <Route path="stat-card" element={<StatCardDocs />} />
                <Route path="empty-state" element={<EmptyStateDocs />} />
                <Route path="calendar" element={<CalendarDocs />} />

                {/* Organismos */}
                <Route path="card" element={<CardDocs />} />
                <Route path="callout" element={<CalloutDocs />} />
                <Route path="sidebar" element={<SidebarDocs />} />
                <Route path="animate-in" element={<AnimateInDocs />} />
                <Route path="code-block" element={<CodeBlockDocs />} />
              </Routes>
            </DocsLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
