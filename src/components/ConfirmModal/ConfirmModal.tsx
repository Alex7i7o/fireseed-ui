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
      <div className="space-y-5">
        <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        {children}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-3 border-t border-white/10">
          <Button variant="outline" className="w-full sm:w-auto min-h-[44px]" onClick={onClose}>
            {cancelText}
          </Button>
          <FeedbackButton
            variant={isDestructive ? 'destructive' : 'solid'}
            className="w-full sm:w-auto min-h-[44px]"
            initialText={confirmText}
            onClick={async () => {
              await onConfirm();
              onClose();
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
