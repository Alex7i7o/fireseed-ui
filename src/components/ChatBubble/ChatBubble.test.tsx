/* Developed by FireSeed - Fueling Innovation */
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChatBubble } from './ChatBubble';

describe('ChatBubble Component', () => {
  it('renderiza mensaje del usuario correctamente', () => {
    render(
      <ChatBubble
        sender="user"
        senderName="Camila Rossi"
        timestamp="18:32"
        text="Hola, quiero consultar turnos"
      />
    );
    expect(screen.getByText('Hola, quiero consultar turnos')).toBeInTheDocument();
    expect(screen.getByText('Camila Rossi')).toBeInTheDocument();
    expect(screen.getByText('18:32')).toBeInTheDocument();
  });

  it('renderiza mensaje del asistente IA con acciones interactivas', () => {
    const handleAction = vi.fn();
    render(
      <ChatBubble
        sender="assistant"
        senderName="Asistente FireSeed"
        timestamp="18:33"
        text="Perfecto, ¿para qué día te gustaría?"
        actions={[
          { id: '1', label: 'Jueves 18:30 hs', onClick: handleAction },
          { id: '2', label: 'Viernes 09:00 hs' }
        ]}
      />
    );
    expect(screen.getByText('Perfecto, ¿para qué día te gustaría?')).toBeInTheDocument();
    const actionBtn = screen.getByRole('button', { name: /jueves 18:30 hs/i });
    expect(actionBtn).toBeInTheDocument();
    fireEvent.click(actionBtn);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });
});
