/* Developed by FireSeed - Fueling Innovation */
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

describe('Modal Component', () => {
  it('no renderiza contenido cuando isOpen=false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Contenido Oculto</p>
      </Modal>
    );
    expect(screen.queryByText('Contenido Oculto')).not.toBeInTheDocument();
  });

  it('renderiza contenido, rol dialog y accesibilidad cuando isOpen=true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Título Modal">
        <p>Contenido Visible</p>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Título Modal')).toBeInTheDocument();
    expect(screen.getByText('Contenido Visible')).toBeInTheDocument();
  });

  it('cierra el modal al presionar la tecla Escape', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Prueba Escape">
        <p>Presiona Escape</p>
      </Modal>
    );
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('cierra el modal al hacer click en el botón de cerrar', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Cerrar Botón">
        <p>Cuerpo</p>
      </Modal>
    );
    const closeBtn = screen.getByRole('button', { name: /cerrar modal/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
