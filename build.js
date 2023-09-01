const fs = require('fs')
const path = require('path')
require('dotenv').config()
const { execSync } = require('child_process')

const sourceDir = path.join(__dirname, 'src')

try {
  const sourceDirectory = './dist'

  fs.rmSync(sourceDirectory, { recursive: true, force: true })

  execSync(
    `parcel build ${sourceDir}/index.html --public-url ${publicUrl} --no-source-maps`,
    {
      stdio: 'inherit',
    },
  )

  // Создаем папку для файлов, кроме HTML
  const destinationDirForOtherFiles = path.join(
    sourceDirectory,
    otherFilesSubfolder,
  )
  fs.mkdirSync(destinationDirForOtherFiles, { recursive: true })

  // Перемещаем файлы, кроме HTML
  moveFilesToSubfolder(sourceDirectory, destinationDirForOtherFiles)
} catch (err) {
  console.error('Error executing parcel build:', err.message)
}

function moveFilesToSubfolder(sourceDir, destinationDir, isFirstCall = true) {
  fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(sourceDir, entry.name)
    const targetPath = path.join(destinationDir, entry.name)

    if (entry.isFile() && path.extname(entry.name) !== '.html') {
      try {
        fs.renameSync(entryPath, targetPath)
      } catch (err) {
        console.error(
          `Error moving ${entry.name} to ${destinationDir}: ${err.message}`,
        )
      }
    } else if (entry.isDirectory()) {
      moveFilesToSubfolder(entryPath, destinationDir, false)
    }
  })
}
