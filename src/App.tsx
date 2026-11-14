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
import { CheckboxDocs } from './docs/CheckboxDocs';
import { RadioDocs } from './docs/RadioDocs';
import { AvatarDocs } from './docs/AvatarDocs';
import { TooltipDocs } from './docs/TooltipDocs';
import { TextareaDocs } from './docs/TextareaDocs';
import { SliderDocs } from './docs/SliderDocs';
import { SeparatorDocs } from './docs/SeparatorDocs';
import { SkeletonDocs } from './docs/SkeletonDocs';
import { SwitchDocs } from './docs/SwitchDocs';
import { InlineCodeDocs } from './docs/InlineCodeDocs';
import { StepBadgeDocs } from './docs/StepBadgeDocs';

// Moléculas
import { FeedbackButtonDocs } from './docs/FeedbackButtonDocs';
import { ModalDocs } from './docs/ModalDocs';
import { ConfirmModalDocs } from './docs/ConfirmModalDocs';
import { CalendarDocs } from './docs/CalendarDocs';
import { DatePickerDocs } from './docs/DatePickerDocs';
import { DropdownMenuDocs } from './docs/DropdownMenuDocs';
import { MultiSelectDocs } from './docs/MultiSelectDocs';
import { TabsDocs } from './docs/TabsDocs';
import { BreadcrumbDocs } from './docs/BreadcrumbDocs';
import { PaginationDocs } from './docs/PaginationDocs';
import { StepperDocs } from './docs/StepperDocs';
import { PasswordRequirementsDocs } from './docs/PasswordRequirementsDocs';
import { StarRatingDocs } from './docs/StarRatingDocs';
import { AccordionDocs } from './docs/AccordionDocs';
import { StatCardDocs } from './docs/StatCardDocs';
import { EmptyStateDocs } from './docs/EmptyStateDocs';

// Organismos
import { ChatDocs } from './docs/ChatDocs';
import { TableDocs } from './docs/TableDocs';
import { DrawerDocs } from './docs/DrawerDocs';
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
                <Route path="checkbox" element={<CheckboxDocs />} />
                <Route path="radio" element={<RadioDocs />} />
                <Route path="avatar" element={<AvatarDocs />} />
                <Route path="tooltip" element={<TooltipDocs />} />
                <Route path="textarea" element={<TextareaDocs />} />
                <Route path="slider" element={<SliderDocs />} />
                <Route path="separator" element={<SeparatorDocs />} />
                <Route path="skeleton" element={<SkeletonDocs />} />
                <Route path="switch" element={<SwitchDocs />} />
                <Route path="inline-code" element={<InlineCodeDocs />} />
                <Route path="step-badge" element={<StepBadgeDocs />} />

                {/* Moléculas */}
                <Route path="feedback-button" element={<FeedbackButtonDocs />} />
                <Route path="modal" element={<ModalDocs />} />
                <Route path="confirm-modal" element={<ConfirmModalDocs />} />
                <Route path="calendar" element={<CalendarDocs />} />
                <Route path="date-picker" element={<DatePickerDocs />} />
                <Route path="dropdown-menu" element={<DropdownMenuDocs />} />
                <Route path="multiselect" element={<MultiSelectDocs />} />
                <Route path="tabs" element={<TabsDocs />} />
                <Route path="breadcrumb" element={<BreadcrumbDocs />} />
                <Route path="pagination" element={<PaginationDocs />} />
                <Route path="stepper" element={<StepperDocs />} />
                <Route path="password-requirements" element={<PasswordRequirementsDocs />} />
                <Route path="star-rating" element={<StarRatingDocs />} />
                <Route path="accordion" element={<AccordionDocs />} />
                <Route path="stat-card" element={<StatCardDocs />} />
                <Route path="empty-state" element={<EmptyStateDocs />} />

                {/* Organismos */}
                <Route path="chat" element={<ChatDocs />} />
                <Route path="table" element={<TableDocs />} />
                <Route path="drawer" element={<DrawerDocs />} />
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
