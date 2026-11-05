/* Developed by FireSeed - Fueling Innovation */
import React from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { FeedbackButton } from '../FeedbackButton';
import { haptics } from '../../utils/haptics';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<unknown> | void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  children?: React.ReactNode;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = '¿Confirmar acción?',
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  isDestructive = false,
  children
}: ConfirmModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      if (isDestructive) {
        haptics.warning();
      } else {
        haptics.light();
      }
    }
  }, [isOpen, isDestructive]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="text-white/70 mb-6 text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      {children}
      <div className="flex flex-col-reverse sm:flex-row gap-3 mt-6">
        <Button variant="outline" className="w-full" onClick={onClose}>
          {cancelText}
        </Button>
        <FeedbackButton
          variant={isDestructive ? 'destructive' : 'solid'}
          className="w-full"
          initialText={confirmText}
          onClick={async () => {
            await onConfirm();
            onClose();
          }}
        />
      </div>
    </Modal>
  );
}
