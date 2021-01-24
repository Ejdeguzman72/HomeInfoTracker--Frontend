import React from 'react';
import CarRecordUploadServices from '../../services/CarRecordsUploadServices';

export class CarRecordUploadComponent extends React.Component {
    constructor(props) {
        super(props);

        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);

        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",

            fileInfos: []
        };
    }

    selectFile(event) {
        this.setState({
            selectedFiles: event.target.files
        });
        console.log(this.state.selectedFiles + "this is selectedFiles for auto");
    }

    upload() {
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile
        });

        CarRecordUploadServices.uploadAutoFiles(currentFile, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then((response) => {
                this.setState({
                    message: response.data.message,
                });
                return CarRecordUploadServices.getAutoFiles();
            })
            // .then((files) => {
            //     this.setState({
            //         progress: 0,
            //         message: "Could not upload the file!",
            //         currentFile: undefined,
            //     });
            // });

        this.setState({
            selectedFiles: undefined,
        });
    }

    componentDidMount() {
        CarRecordUploadServices.getAutoFiles().then((response) => {
            this.setState({
                fileInfos: response.data,
            })
            console.log(this.state.fileInfos + "alksjhflkajsdjsfkdfkalh");
        });
    }

    render() {
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos
        } = this.state;

        return (
            <div>
                {currentFile && (
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: progress + "%" }}
                        >
                            {progress}%
            </div>
                    </div>
                )}

                <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile} />
                </label>

                <button className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={this.upload}
                >
                    Upload
                </button>

                <div className="alert alert-light" role="alert">
                    {message}
                </div>

                <div className="media-uploads-container-title">
                    <div className="card-header">List of Files</div>
                    <ul className="media-uploads-container">
                        {fileInfos &&
                            fileInfos.map((file, index) => (
                                <li className="list-group-item" key={index}>
                                    <a href={file.autoTrxFileUrl}>{file.autoTrxFilename}</a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        )
    }
}