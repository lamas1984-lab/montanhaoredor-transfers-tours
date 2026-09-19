#!/usr/bin/env bash
set -euo pipefail

EXPECTED_ROOT="/home/ubuntu/montanhaoredor-transfers-tours"
PROTECTED_ROOT="/home/ubuntu/montanhaoredor-site"
CURRENT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

if [ "$CURRENT_ROOT" != "$EXPECTED_ROOT" ]; then
  echo "ERRO: diretório incorreto: $CURRENT_ROOT"
  exit 1
fi

if find . -type l -lname "$PROTECTED_ROOT*" | grep -q .; then
  echo "ERRO: ligação simbólica ao projeto protegido."
  exit 1
fi

if grep -R "$PROTECTED_ROOT" . --exclude-dir=node_modules --exclude-dir=.git --exclude='validate-project-isolation.sh' | grep -v 'docs/project-scope.md' >/dev/null 2>&1; then
  echo "ERRO: referência técnica inesperada ao projeto protegido."
  exit 1
fi

echo "OK: projeto Transfers isolado da Casa do Lagar."
