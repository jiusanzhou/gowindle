/*
 * Copyright (c) 2020 wellwell.work, LLC by Zoe
 *
 * Licensed under the Apache License 2.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package main

import (
	"log"

	"go.zoe.im/gowindle/pkg/ui"
)

// The installer GUI. Add reosurce at building time.

// Steps:
// - License: (disbale, LICENSE file, License Remote)
// - Who: (whoami, search exits one)
// - Path: (editable, explorer, default <user_home>\AppData\Local\Programs\)
// - Start: (processing, logging)
// - Complete: (create desktop shortcuts, add to Start Menu)

func main() {
	app, err := ui.NewApp("GoWindle Installer")
	if err != nil {
		log.Fatalln(err)
		return
	}

	app.Run()
}

func init() {
	// register step and requriments
}
