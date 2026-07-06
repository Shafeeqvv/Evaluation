document.getElementById('appraisalForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Stop normal form pipeline to compile the layout artifact

            const formElement = this;
            const val = (id) => document.getElementById(id).value || 'N/A';

            // Generate an email-safe data matrix structure
            let goalsRowsHtml = '';
            for(let i = 1; i <= 5; i++) {
                goalsRowsHtml += `
                    <tr>
                        <td style="padding:8px; border:1px solid #ddd;">${val('g'+i+'_desc')}</td>
                        <td style="padding:8px; border:1px solid #ddd;">${val('g'+i+'_tgt')}</td>
                        <td style="padding:8px; border:1px solid #ddd;">${val('g'+i+'_ach')}</td>
                        <td style="padding:8px; border:1px solid #ddd; text-align:center; font-weight:bold;">${val('g'+i+'_rat')}</td>
                    </tr>
                `;
            }

            // Construct a self-contained dashboard layout page blueprint
            const artifactPageMarkup = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Appraisal Record Ledger</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 30px; margin:0; color: #1f2937;">
                <div style="max-w: 800px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; overflow: hidden;">
                    <div style="background-color: #3A444A; padding: 24px; border-bottom: 5px solid #E31E24; color: #ffffff;">
                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                                <td>
                                    <h1 style="margin: 0; font-size: 24px; font-weight:900; text-transform: uppercase; letter-spacing: 1px;">MAF FIRE</h1>
                                    <p style="margin: 0; font-size: 11px; color: #9ca3af; font-style: italic; text-transform:uppercase;">for a safer world</p>
                                </td>
                                <td style="text-align: right;">
                                    <h2 style="margin: 0; font-size: 18px; font-weight:bold;">Employee Self Appraisal Summary</h2>
                                    <p style="margin: 0; font-size: 12px; color: #9ca3af;">Period: January - June 2026</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div style="padding: 30px;">
                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">1. Employee Information</h3>
                        <table width="100%" style="background:#F3F4F6; padding:15px; margin-bottom: 25px; border-radius:6px; border: 1px solid #e5e7eb;" cellspacing="4">
                            <tr>
                                <td width="50%" style="font-size:13px; padding:4px;"><strong>Employee Name:</strong> ${val('empName')}</td>
                                <td width="50%" style="font-size:13px; padding:4px;"><strong>Department:</strong> ${val('empDept')}</td>
                            </tr>
                            <tr>
                                <td style="font-size:13px; padding:4px;"><strong>Position / Title:</strong> ${val('empTitle')}</td>
                                <td style="font-size:13px; padding:4px;"><strong>Review Period:</strong> ${val('reviewPeriod')}</td>
                            </tr>
                        </table>

                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">2. Key Goals and Results</h3>
                        <table width="100%" style="border-collapse: collapse; font-size: 13px; margin-bottom: 25px;">
                            <tr style="background: #f3f4f6; font-weight: bold; text-transform: uppercase;">
                                <th style="padding:10px; border:1px solid #ddd; text-align:left;">Goal</th>
                                <th style="padding:10px; border:1px solid #ddd; text-align:left;">Target</th>
                                <th style="padding:10px; border:1px solid #ddd; text-align:left;">Achievement</th>
                                <th style="padding:10px; border:1px solid #ddd; text-align:center; width:110px;">Self-Rating</th>
                            </tr>
                            ${goalsRowsHtml}
                        </table>

                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">3. Written Narrative Evaluations</h3>
                        <div style="font-size: 13px; margin-bottom: 25px; line-height: 1.5;">
                            <p style="margin:6px 0 14px 0; padding:10px; background:#fafafa; border-left:3px solid #ddd;"><strong>Employee Comments:</strong><br><span style="color:#4b5563;">${val('narrative_comments')}</span></p>
                            <p style="margin:6px 0 14px 0; padding:10px; background:#fafafa; border-left:3px solid #ddd;"><strong>Major Accomplishments:</strong><br><span style="color:#4b5563;">${val('narrative_wins')}</span></p>
                            <p style="margin:6px 0 14px 0; padding:10px; background:#fafafa; border-left:3px solid #ddd;"><strong>Challenges Encountered:</strong><br><span style="color:#4b5563;">${val('narrative_challenges')}</span></p>
                            <p style="margin:6px 0 14px 0; padding:10px; background:#fafafa; border-left:3px solid #ddd;"><strong>Actions Taken:</strong><br><span style="color:#4b5563;">${val('narrative_actions')}</span></p>
                        </div>

                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">4. Competency Assessments</h3>
                        <table width="100%" style="border-collapse: collapse; font-size: 13px; margin-bottom: 25px;">
                            <tr style="background: #f3f4f6; font-weight: bold; text-transform: uppercase;">
                                <th style="padding:10px; border:1px solid #ddd; text-align:left;">Competency</th>
                                <th style="padding:10px; border:1px solid #ddd; text-align:center; width: 110px;">Self-Rating</th>
                                <th style="padding:10px; border:1px solid #ddd; text-align:left;">Comments</th>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#fafafa;">Communication</td>
                                <td style="padding:10px; border:1px solid #ddd; text-align:center; font-weight:bold; background:#fff;">${val('c_comm_rat')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; background:#fff;">${val('c_comm_cmt')}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#fafafa;">Teamwork</td>
                                <td style="padding:10px; border:1px solid #ddd; text-align:center; font-weight:bold; background:#fff;">${val('c_team_rat')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; background:#fff;">${val('c_team_cmt')}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#fafafa;">Problem Solving</td>
                                <td style="padding:10px; border:1px solid #ddd; text-align:center; font-weight:bold; background:#fff;">${val('c_prob_rat')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; background:#fff;">${val('c_prob_cmt')}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #ddd; font-weight:bold; background:#fafafa;">Leadership</td>
                                <td style="padding:10px; border:1px solid #ddd; text-align:center; font-weight:bold; background:#fff;">${val('c_lead_rat')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; background:#fff;">${val('c_lead_cmt')}</td>
                            </tr>
                        </table>

                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">5. Learning & Development</h3>
                        <table width="100%" style="border-collapse: collapse; font-size: 13px; margin-bottom: 25px;">
                            <tr style="background: #f3f4f6; font-weight: bold; text-transform: uppercase;">
                                <th width="33.33%" style="padding:10px; border:1px solid #ddd;">Training Completed</th>
                                <th width="33.33%" style="padding:10px; border:1px solid #ddd;">Skills Developed</th>
                                <th width="33.33%" style="padding:10px; border:1px solid #ddd;">Areas for Improvement</th>
                            </tr>
                            <tr>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; vertical-align:top; height:60px; background:#fff;">${val('ld_training')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; vertical-align:top; height:60px; background:#fff;">${val('ld_skills')}</td>
                                <td style="padding:10px; border:1px solid #ddd; color:#4b5563; vertical-align:top; height:60px; background:#fff;">${val('ld_areas')}</td>
                            </tr>
                        </table>

                        <h3 style="background: #3A444A; color: #fff; padding: 8px 12px; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #E31E24;">6. Goals for Next Six Months</h3>
                        <div style="font-size: 13px; background:#fafafa; padding:15px; border:1px solid #ddd; border-radius:6px; color:#4b5563; line-height:1.5;">
                            ${val('future_goals')}
                        </div>
                    </div>
                </div>
            </body>
            </html>`;

            // Convert raw compiled HTML layout into a physical document artifact blob
            const fileBlob = new Blob([artifactPageMarkup], { type: 'text/html' });
            
            // Generate a clean filename using the employee's name
            const cleanEmpName = val('empName').replace(/[^a-zA-Z0-9]/g, "_");
            const compiledFile = new File([fileBlob], `Appraisal_Ledger_${cleanEmpName}.html`, { type: 'text/html' });

            // Create a dynamic programmatic FormData body to route to FormSubmit pipelines
            const submitPayload = new FormData(formElement);
            
            // Append the compiled document into the file transport system 
            // Note: FormSubmit maps parameters named "attachment" to incoming email files natively.
            submitPayload.append('attachment', compiledFile);

            // Update user submission interface
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            submitBtn.disabled = true;
            btnText.innerText = "Transmitting Ledger Record...";

            // Ship out data payload over Fetch pipeline natively
            fetch(formElement.action, {
                method: 'POST',
                body: submitPayload
            })
            .then(response => {
                if(response.ok) {
                    window.location.href = document.getElementsByName('_next')[0].value;
                } else {
                    alert("Submission error. Please verify network connections.");
                    submitBtn.disabled = false;
                    btnText.innerText = "Submit Appraisal Ledger";
                }
            })
            .catch(error => {
                console.error(error);
                alert("Pipeline fault during processing request.");
                submitBtn.disabled = false;
                btnText.innerText = "Submit Appraisal Ledger";
            });
        });