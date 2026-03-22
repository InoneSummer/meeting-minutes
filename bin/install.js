#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'meeting-minutes';
const targetDir = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
const skillSrc = path.join(__dirname, '..', 'skills', 'meeting-minutes', 'SKILL.md');

try {
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(skillSrc, path.join(targetDir, 'SKILL.md'));
  console.log(`✅ ${SKILL_NAME} 스킬 설치 완료!`);
  console.log(`📁 경로: ${targetDir}`);
  console.log(`\nClaude Code에서 "회의록 정리해줘" 라고 입력해보세요.`);
} catch (err) {
  console.error('❌ 설치 실패:', err.message);
  process.exit(1);
}
