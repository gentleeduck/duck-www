import fs from 'node:fs/promises'
import path from 'node:path'

const rotateIfExists = async (relativePath) => {
  const targetPath = path.join(process.cwd(), relativePath)

  try {
    await fs.access(targetPath)
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return
    }

    throw error
  }

  const rotatedPath = `${targetPath}.prev-${Date.now()}`
  await fs.rename(targetPath, rotatedPath)

  console.log(`[prepare-build-artifacts] Moved ${targetPath} -> ${rotatedPath}`)
}

await rotateIfExists('.next')
